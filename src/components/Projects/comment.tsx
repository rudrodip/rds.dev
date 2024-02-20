export type CommentProps = {
  commentor: string;
  commentorImage: string;
  commentorUrl: string;
  commentorDesignation: string;
  comment: string;
};

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Comment({
  commentor,
  commentorImage,
  commentorUrl,
  commentorDesignation,
  comment,
}: CommentProps) {
  return (
    <div className="flex flex-col bg-popover/80 dark:bg-popover/50 backdrop-blur-lg p-3 lg:p-4 rounded-lg border max-w-sm h-full">
      <div className="flex items-start gap-2">
        <Avatar>
          <AvatarImage src={commentorImage} alt="@shadcn" />
          <AvatarFallback>{commentor[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <a
            href={commentorUrl}
            target="_blank"
            className="text-sm hover:underline"
          >
            {commentor}
          </a>
          <p className="text-sm text-muted-foreground">
            {commentorDesignation}
          </p>
        </div>
      </div>
      <p className="mt-2 text-sm">{comment}</p>
    </div>
  );
}
