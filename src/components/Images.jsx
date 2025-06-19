import React, { useState } from "react";
import likes from "../assets/like.svg";
import share from "../assets/share.svg";
import info from "../assets/info.svg";
import dwd from "../assets/dwd.svg";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const Images = ({ data }) => {
  console.log("data=====> ", data);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="mb-10 " onClick={handleOpen}>
        <div className="flex flex-col my-">
          <img
            src={data.urls.small}
            alt={data.alt_description}
            className="rounded-t-lg"
          />
          <div className="flex justify-between items-center bg-[#F4E7FB] dark:bg-slate-800 border-[#E5E5E5] dark:border-slate-900 p-3 border-2 rounded-b-lg">
            <div className="flex justify-between items-center">
              <img
                src={data.user.profile_image.small}
                className="rounded-full md:w-10 w-5 mr-3"
                alt="Profile Image"
              />
              <div>
                <p className="md:text-sm text-[0.389rem] font-bold">
                  {" "}
                  {data.user.first_name} <span>{data.user.last_name} </span>{" "}
                </p>
                <p className="text-[#A7A7A7] md:text-xs text-[0.342rem] font-semibold ">
                  @{data.user.instagram_username}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <img src={likes} alt="" className="md:w-5 w-2 mr-1" />
              <p className="md:text-xs text-[0.342rem] font-bold">
                {data.user.total_likes}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="w-4/5 md:w-2/5 rounded-xl">
            <div className="relative">
              <img
                src={data.urls.small}
                alt={data.alt_description}
                className="relative rounded-t-lg w-full md:max-h-[500px] max-h-[800px] "
              />
              <div className="md:absolute md:top-[90%] flex w-full items-center">
                <div className=" absolute flex items-center mt-3 md:left-5 right-3 md:right-0 bottom-[10%] md:top-0">
                  <img src={share} className="" alt="" />
                  <img src={info} className=" ms-2" alt="" />
                </div>
                <img src={dwd} className="md:absolute right-5 hidden " alt="" />
              </div>
            </div>
            <div className="flex justify-between items-center p-3  ">
              <div className="flex justify-between items-center">
                <img
                  src={data.user.profile_image.small}
                  className="rounded-full md:w-10 w-5 mr-3"
                  alt="Profile Image"
                />
                <div>
                  <p className="md:text-sm text-[0.389rem] font-bold">
                    {" "}
                    {data.user.first_name} <span>{data.user.last_name} </span>{" "}
                  </p>
                  <p className="text-[#A7A7A7] md:text-xs text-[0.342rem] font-semibold ">
                    @{data.user.instagram_username}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <img src={likes} alt="" className="md:w-5 w-2 mr-1" />
                <p className="md:text-xs text-[0.342rem] font-bold">
                  {data.user.total_likes}
                </p>
              </div>
            </div>
            <h2 className="text-sm font-bold px-3 mt-2">Related Tags</h2>
            <div className="flex flex-wrap gap-5 p-3">
              {data?.tags?.map((tag, index) => {
                return (
                  <div key={index} className="bg-[#ECECEC] px-3 py-2 rounded">
                    <p className="font-medium text-xs text-[#4F4F4F]">
                      {tag.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Images;
