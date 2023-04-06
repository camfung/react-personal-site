import React from "react";
import { useState } from "react";
import "../../../global_components/backgroundcolors.css";
import { useNavigate } from "react-router-dom";
import "./ComunityCanvas.css";
import CanvasViewer from "./CanvasViewer";

function ComunityCanvasMain() {
  return (
    <div class="ComunityCanvas-wrapper">
      <CanvasViewer></CanvasViewer>
    </div>
  );
}

export default ComunityCanvasMain;
