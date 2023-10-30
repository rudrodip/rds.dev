import type { item } from "@src/types";
import Image from "next/image";

type SectionViewLargeProps = {
  id: number;
  item: item;
  handleActiveItemChange: (index: number) => void;
}

export const SectionViewSmall = ({ id, item, handleActiveItemChange }: SectionViewLargeProps) => {
  return (
    <section className="shine shine-hover w-full cursor-pointer border rounded p-1" onClick={() => handleActiveItemChange(id)}>
      <Image
        src={item.image.desktop}
        alt={item.title}
        width={640}
        height={480}
        className="rounded"
      />
      <h1 className="text-heading text-sm">{item.title}</h1>
    </section>
  );
};
