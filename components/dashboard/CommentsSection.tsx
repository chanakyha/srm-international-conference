import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const CommentsSection = () => {
  return (
    <section className="w-full gap-1.5">
        <div className="antialiased mx-auto max-w-5xl ">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
          <div className="space-y-4">
            <div className="flex justify-start">
              <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                <span className="font-bold mr-2">Sarah</span>
                <span className="text-xs text-gray-400">3:34 PM</span>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
                <div className="mt-4 flex items-center">
                  <div>
                    <Button variant={"default"} size="sm">
                      Re-Upload
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default CommentsSection;
