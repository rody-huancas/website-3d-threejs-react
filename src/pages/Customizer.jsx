import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { DecalTypes, EditorTabs, FilterTabs } from "../config/constants";
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key={"custom"}
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    onClick={() => {}}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute z-10 top-5 right-5"
          >
            <CustomButton
              type={"filled"}
              title="Go Back"
              handleClick={() => state.intro = true}
              customStyles={"w-fit px-4 py-2.5 font-bold text-sm"}
            />
          </motion.div>

          <motion.div 
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab=""
                onClick={() => {}}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
