import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

import { Typography, Stack } from '@mui/material';

const items = [
  { value: 10, label: 'series A ( no Id )' },
  { id: 'id_B', value: 15, label: 'series B' },
  { id: 'id_C', value: 20, label: 'series C' },
];

const formatObject = (obj) => {
  if (obj === null) {
    return '  undefined';
  }
  return JSON.stringify(obj, null, 2)
    .split('\n')
    .map((l) => `  ${l}`)
    .join('\n');
};
export default function OnSeriesItemClick() {
  const [identifier, setIdentifier] = React.useState(null);
  const [id, setId] = React.useState(undefined);

  const handleClick = (event, itemIdentifier, item) => {
    setId(item.id);
    setIdentifier(itemIdentifier);
  };

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={{ width: '100%' }}
    >
      <Typography
        component="pre"
        sx={{ maxWidth: { xs: '100%', md: '50%' }, overflow: 'auto' }}
      >
        {`item id: ${id ?? 'undefined'}

item identifier:
${formatObject(identifier)}`}
      </Typography>

      <PieChart
        series={[
          {
            data: items,
            cx: 100,
          },
        ]}
        slotProps={{
          legend: {
            offset: { x: -50 },
          },
        }}
        onClick={handleClick}
        width={400}
        height={200}
      />
    </Stack>
  );
}
