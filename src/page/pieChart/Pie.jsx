import { Box, useTheme } from "@mui/material";
import { ResponsivePie } from '@nivo/pie'


const data = [
    {
        "id": "donut",
        "label": "donut",
        "value": 521,
        "color": "hsl(51, 70%, 50%)"
    },
    {
        "id": "hot dog",
        "label": "hot dog",
        "value": 530,
        "color": "hsl(240, 70%, 50%)"
    },
    {
        "id": "burger",
        "label": "burger",
        "value": 596,
        "color": "hsl(129, 70%, 50%)"
    },
    {
        "id": "kebab",
        "label": "kebab",
        "value": 536,
        "color": "hsl(163, 70%, 50%)"
    },
    {
        "id": "fries",
        "label": "fries",
        "value": 100,
        "color": "hsl(286, 70%, 50%)"
    }
]

// eslint-disable-next-line react/prop-types
export default function Pie({ isDashboard = false }) {
    const theme = useTheme();

    return (
        <Box sx={{ height: isDashboard ? "220px" : '75vh' }}>
            <ResponsivePie
                data={data}
                margin={isDashboard ? { top: 10, right: 0, bottom: 10, left: 0 } :{ top: 40, right: 80, bottom: 80, left: 80 }}
                startAngle={-68}
                innerRadius={isDashboard ? 0.8 : 0.5}
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
                            strokeWidth: 1,
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
                padAngle={0.7}
                cornerRadius={6}
                activeOuterRadiusOffset={8}
                colors={{ scheme: 'category10' }}
                borderWidth={4}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={theme.palette.text.primary}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'theme.palette.text.primary',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={
                    isDashboard ? [] :

                        [
                            {
                                anchor: 'bottom',
                                direction: 'row',
                                justify: false,
                                translateX: 0,
                                translateY: 56,
                                itemsSpacing: 0,
                                itemWidth: 100,
                                itemHeight: 18,
                                itemTextColor: '#999',
                                itemDirection: 'left-to-right',
                                itemOpacity: 1,
                                symbolSize: 18,
                                symbolShape: 'circle',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemTextColor: theme.palette.text.primary
                                        }
                                    }
                                ]
                            }
                        ]}
            />
        </Box>)
}
