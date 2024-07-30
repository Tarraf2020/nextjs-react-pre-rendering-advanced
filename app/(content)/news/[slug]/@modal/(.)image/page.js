import { notFound } from "next/navigation";
import React from "react";
import ModalBackdrop from "@/components/modalBackdrop";
import { getNewsItem } from "@/lib/news";

const ImagePage = async ({ params }) => {
  const newsItem = await getNewsItem(params.slug);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width="100%"
          />
        </div>
      </dialog>
    </>
  );
};

export default ImagePage;
