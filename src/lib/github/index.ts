import type { Repository, searchRes, RepositoryOwner } from "@src/types/github";
import { graphql } from "@octokit/graphql";

export const getPinnedRepos = async (
  username: string | null | undefined,
  access_token: string | null | undefined
) => {
  const response = await graphql<searchRes<{
    pinnedItems: { totalCount: number; nodes: Repository[] };
  }>>(
    `
    {
      search (query: "${username}", type: USER, first: 1){
        edges {
          node {
            ... on User{
              pinnedItems(first: 6, types: REPOSITORY) {
                totalCount
                nodes {
                  ... on Repository {
                    name
                    description
                    url
                    forkCount
                    stargazerCount
                    primaryLanguage {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    `,
    {
      headers: {
        authorization: `token ${access_token}`,
      },
    }
  );
  if (response.search.edges.length > 0){
    return response.search.edges[0].node.pinnedItems.nodes
  } else {
    throw new Error('Cannot find user')
  }
};

export const getRecentRepos = async (
  username: string | null | undefined,
  access_token: string | null | undefined
): Promise<Repository[]> => {
  const response = await graphql<RepositoryOwner>(
    `
    {
      user(login: "${username}") {
        repositories(first: 6, ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false, orderBy: {field: UPDATED_AT, direction: DESC}) {
          totalCount
            nodes {
              url
              name
              description
              stargazerCount
              primaryLanguage {
                name
              }
              forkCount
            }
        }
      }
    }
    `,
    {
      headers: {
        authorization: `token ${access_token}`,
      },
    }
  );

  return response.user.repositories.nodes;
};