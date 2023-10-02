import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const CommentsSection = ({ paper }: any) => {
  console.log(paper?.comments);
  return (
    <section className="w-full gap-1.5">
      <div className="antialiased mx-auto max-w-7xl ">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
        <div className="space-y-4">
          <div className="flex justify-start flex-col gap-4">
            {paper?.comments.map((comment: any) => (
              <div
                key={comment}
                className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
              >
                <span className="font-bold mr-2">
                  {paper.assignedReviewerName}
                </span>
                <span className="text-xs text-gray-400">
                  {comment.createdAt
                    ?.toDate()
                    ?.toLocaleTimeString()}
                </span>
                <p className="text-sm">{comment.comments}</p>
                <div className="mt-4 flex items-center gap-2">
                  {comment.reupload && (
                    <div>
                      <Button variant={"default"} size="sm">
                        Re-Upload
                      </Button>
                    </div>
                  )}
                  <div>
                    <Button variant={"outline"} size="sm">
                      Reply via Email
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
