'use client';

import { DataGridPro, GridColDef, GridRenderCellParams } from '@mui/x-data-grid-pro';
import { useEffect, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { PlayerPassingData } from './playerPassingData';
import CustomGridToolbar from '@/app/components/CustomGridToolBar';
import Link from 'next/link';

export default function PlayerPassingStats() {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('xl'));

  const [fetched, setFetched] = useState<boolean>(false);
  const [data, setData] = useState<PlayerPassingData[]>([]);
  const [rows, setRows] = useState<PlayerPassingData[]>([]);
  const [tier, setTier] = useState<string>('Veteran');

  const fetchData = async () => {
    const res = await fetch('/api/passing');
    const data = await res.json();
    setData(data);
    setRows(data.filter((x: PlayerPassingData) => x.tier === tier));
    setFetched(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setRows(data.filter((x: PlayerPassingData) => x.tier === tier));
  }, [tier]);

  const columns: GridColDef[] = !desktop
    ? [
        {
          field: 'player_name',
          headerName: 'NAME',
          width: 130,
          renderCell: (params: GridRenderCellParams<any, string>) => (
            <Link href={`https://glb2.warriorgeneral.com/game/player/${params.row.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <strong>{params.value}</strong>
            </Link>
          ),
          disableColumnMenu: true,
        },
        {
          field: 'yards',
          headerName: 'YARDS',
          width: 120,
          type: 'number',
          pinnable: false,
          disableColumnMenu: true,
        },
        {
          field: 'yards_per_attempt',
          headerName: 'YPA',
          width: 120,
          type: 'number',
          pinnable: false,
          disableColumnMenu: true,
        },
        {
          field: 'completion_percentage',
          headerName: 'PCT',
          width: 120,
          type: 'number',
          pinnable: false,
          valueFormatter: (value: number) => `${value}%`,
          disableColumnMenu: true,
        },
        {
          field: 'attempts',
          headerName: 'ATT',
          width: 120,
          type: 'number',
          pinnable: false,
          disableColumnMenu: true,
        },
        {
          field: 'completions',
          headerName: 'COMP',
          width: 120,
          type: 'number',
          pinnable: false,
          disableColumnMenu: true,
        },
        {
          field: 'touchdowns',
          headerName: 'TD',
          width: 120,
          type: 'number',
          pinnable: false,
          disableColumnMenu: true,
        },
        {
          field: 'interceptions',
          headerName: 'INT',
          width: 120,
          type: 'number',
          pinnable: false,
          disableColumnMenu: true,
        },
        {
          field: 'gm_rating',
          headerName: 'GM Rating',
          width: 120,
          type: 'number',
          pinnable: false,
          valueGetter: (value, row) => {
            return Math.round(0.1 * +row.yards + 10.0 * +row.touchdowns - 10.0 * +row.interceptions - +row.sacks);
          },
          disableColumnMenu: true,
        },
      ]
    : [
        {
          field: 'player_name',
          headerName: 'NAME',
          flex: 2,
          renderCell: (params: GridRenderCellParams<any, string>) => (
            <Link href={`https://glb2.warriorgeneral.com/game/player/${params.row.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <strong>{params.value}</strong>
            </Link>
          ),
        },
        {
          field: 'yards',
          headerName: 'YARDS',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'yards_per_attempt',
          headerName: 'YPA',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'completion_percentage',
          headerName: 'PCT',
          flex: 1,
          type: 'number',
          pinnable: false,
          valueFormatter: (value) => `${value}%`,
        },
        {
          field: 'attempts',
          headerName: 'ATT',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'completions',
          headerName: 'YARDS',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'touchdowns',
          headerName: 'TD',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'interceptions',
          headerName: 'INT',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'hurries',
          headerName: 'HRY',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'sacks',
          headerName: 'SACK',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'gm_rating',
          headerName: 'GM Rating',
          flex: 1,
          type: 'number',
          pinnable: false,
          valueGetter: (value, row) => {
            return Math.round(0.1 * +row.yards + 10.0 * +row.touchdowns - 10.0 * +row.interceptions - +row.sacks);
          },
        },
      ];

  return (
    <Box>
      <DataGridPro
        rows={rows ?? []}
        columns={columns}
        loading={rows.length <= 0 && !fetched}
        autoHeight
        sortingOrder={['desc', 'asc']}
        pagination
        pageSizeOptions={[15, 30, 50, 100]}
        density='compact'
        disableRowSelectionOnClick
        disableDensitySelector
        slots={{ toolbar: CustomGridToolbar }}
        slotProps={{ toolbar: { tierFilter: setTier } }}
        initialState={{
          sorting: { sortModel: [{ field: 'gm_rating', sort: 'desc' }] },
          filter: {
            filterModel: {
              items: [{ field: 'attempts', operator: '>=', value: '100' }],
            },
          },
          pagination: { paginationModel: { pageSize: 15 } },
          pinnedColumns: {
            left: ['player_name'],
          },
        }}
      />
    </Box>
  );
}
