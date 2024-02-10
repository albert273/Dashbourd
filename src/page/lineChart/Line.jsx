import { Box, useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'



const data = [
  {
    "id": "japan",
    "color": "hsl(185, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 103
      },
      {
        "x": "helicopter",
        "y": 119
      },
      {
        "x": "boat",
        "y": 134
      },
      {
        "x": "train",
        "y": 101
      },
      {
        "x": "subway",
        "y": 3
      },
      {
        "x": "bus",
        "y": 175
      },
      {
        "x": "car",
        "y": 106
      },
      {
        "x": "moto",
        "y": 178
      },
      {
        "x": "bicycle",
        "y": 77
      },
      {
        "x": "horse",
        "y": 210
      },
      {
        "x": "skateboard",
        "y": 65
      },
      {
        "x": "others",
        "y": 116
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(226, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 41
      },
      {
        "x": "helicopter",
        "y": 24
      },
      {
        "x": "boat",
        "y": 97
      },
      {
        "x": "train",
        "y": 171
      },
      {
        "x": "subway",
        "y": 110
      },
      {
        "x": "bus",
        "y": 132
      },
      {
        "x": "car",
        "y": 77
      },
      {
        "x": "moto",
        "y": 72
      },
      {
        "x": "bicycle",
        "y": 116
      },
      {
        "x": "horse",
        "y": 288
      },
      {
        "x": "skateboard",
        "y": 225
      },
      {
        "x": "others",
        "y": 137
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(105, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 294
      },
      {
        "x": "helicopter",
        "y": 27
      },
      {
        "x": "boat",
        "y": 258
      },
      {
        "x": "train",
        "y": 6
      },
      {
        "x": "subway",
        "y": 210
      },
      {
        "x": "bus",
        "y": 290
      },
      {
        "x": "car",
        "y": 207
      },
      {
        "x": "moto",
        "y": 199
      },
      {
        "x": "bicycle",
        "y": 150
      },
      {
        "x": "horse",
        "y": 284
      },
      {
        "x": "skateboard",
        "y": 132
      },
      {
        "x": "others",
        "y": 126
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(201, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 47
      },
      {
        "x": "helicopter",
        "y": 84
      },
      {
        "x": "boat",
        "y": 238
      },
      {
        "x": "train",
        "y": 7
      },
      {
        "x": "subway",
        "y": 161
      },
      {
        "x": "bus",
        "y": 233
      },
      {
        "x": "car",
        "y": 97
      },
      {
        "x": "moto",
        "y": 63
      },
      {
        "x": "bicycle",
        "y": 73
      },
      {
        "x": "horse",
        "y": 66
      },
      {
        "x": "skateboard",
        "y": 37
      },
      {
        "x": "others",
        "y": 206
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(165, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 152
      },
      {
        "x": "helicopter",
        "y": 66
      },
      {
        "x": "boat",
        "y": 121
      },
      {
        "x": "train",
        "y": 76
      },
      {
        "x": "subway",
        "y": 81
      },
      {
        "x": "bus",
        "y": 109
      },
      {
        "x": "car",
        "y": 128
      },
      {
        "x": "moto",
        "y": 179
      },
      {
        "x": "bicycle",
        "y": 92
      },
      {
        "x": "horse",
        "y": 60
      },
      {
        "x": "skateboard",
        "y": 148
      },
      {
        "x": "others",
        "y": 181
      }
    ]
  }
]

// eslint-disable-next-line react/prop-types
const Line = ({ isDahboard = false }) => {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDahboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        theme={{
          // @ts-ignore
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{

          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard ? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{

          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard ? null : "Count",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;