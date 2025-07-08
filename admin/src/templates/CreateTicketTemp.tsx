import { Input } from "@/components/ui/input";
import React from "react";

function CreateTicketTemp() {
  return (
    <div className="pt-10">
      <form className="grid">
        <div className="">
          <div>
            <div>
              <label>Title :</label>
              <Input type="text" name="title" />
            </div>
            <div>
              <label>Description :</label>
              <Input type="text" name="title" />
            </div>
            <div>pic</div>
            <div>location</div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTicketTemp;
