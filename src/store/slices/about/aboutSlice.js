import { createSlice } from "@reduxjs/toolkit";
import { fetchAbout } from "./aboutAPI";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import { BsFillEmojiFrownFill, BsFillEmojiLaughingFill } from "react-icons/bs";

const aboutSlice = createSlice({
  name: "about",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAbout.fulfilled, (state, { payload }) => {
      return [
        {
          id: 1,
          icon: <FaArrowDown />,
          title: "min",
          data:
            payload[0]?.units === "standard"
              ? +payload[0]?.min_temp?.toFixed() - 273
              : +payload[0]?.min_temp?.toFixed() - 273 + 32,
          unit: payload[0]?.tempUnit,
          units: payload[0]?.units
        },
        {
          id: 2,
          icon: <FaArrowUp />,
          title: "max",
          data:
            payload[0]?.units === "standard"
              ? +payload[0]?.max_temp?.toFixed() - 273
              : +payload[0]?.max_temp?.toFixed() - 273 + 32,
          unit: payload[0].tempUnit,
          units: payload[0]?.units
        },
        {
          id: 3,
          icon:
            +payload[0]?.feels_like?.toFixed() - 273 > 6 ? (
              <BsFillEmojiLaughingFill />
            ) : (
              <BsFillEmojiFrownFill />
            ),
          title: "feels like",
          data:
            payload[0]?.units === "standard"
              ? +payload[0]?.feels_like?.toFixed() - 273
              : +payload[0]?.feels_like?.toFixed() - 273 + 32,
          unit: payload[0].tempUnit,
          units: payload[0]?.units
        },
        {
          id: 4,
          icon: <MdCompress />,
          title: "pressure",
          data: payload[0]?.pressure,
          unit: "hpa",
          units: payload[0]?.units
        },
        {
          id: 5,
          icon: <MdOutlineWaterDrop />,
          title: "humidity",
          data: payload[0]?.humidity,
          unit: "%",
          units: payload[0]?.units
        },
        {
          id: 6,
          icon: <FaWind />,
          title: "wind speed",
          data:
            payload[0]?.units === "standard"
              ? payload[0]?.wind?.toFixed()
              : +payload[0]?.wind?.toFixed() * 3.6,
          unit: payload[0]?.windUnit,
          units: payload[0]?.units
        },
      ];
    })
  },
});

// export const {} = aboutSlice.actions

export const aboutReducer = aboutSlice.reducer;

export const selectAbout = (state) => state.about;
