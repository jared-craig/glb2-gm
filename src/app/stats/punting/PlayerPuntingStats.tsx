'use client';

import { DataGridPro, GridColDef, GridRenderCellParams, GridRowModel } from '@mui/x-data-grid-pro';
import { useEffect, useState } from 'react';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { PlayerPuntingData } from './playerPuntingData';
import CustomGridToolbar from '@/app/components/CustomGridToolBar';
import Link from 'next/link';
import { getPuntingGmRating } from '../statCalculations';

export default function PlayerPassingStats() {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('xl'));

  const [fetched, setFetched] = useState<boolean>(false);
  const [data, setData] = useState<PlayerPuntingData[]>([]);
  const [rows, setRows] = useState<PlayerPuntingData[]>([]);
  const [tier, setTier] = useState<string>('Veteran');

  const fetchData = async () => {
    const res = await fetch('/api/punting');
    const data = await res.json();
    setData(data);
    setRows(data.filter((x: PlayerPuntingData) => x.tier === tier));
    setFetched(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setRows(data.filter((x: PlayerPuntingData) => x.tier === tier));
  }, [tier]);

  const columns: GridColDef[] = !desktop
    ? [
        {
          field: 'player_name',
          headerName: 'NAME',
          width: 140,
          renderCell: (params: GridRenderCellParams<any, string>) => (
            <Link href={`https://glb2.warriorgeneral.com/game/player/${params.row.id}`} target='_blank' style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <strong>{params.value}</strong>
            </Link>
          ),
          disableColumnMenu: true,
        },
        {
          field: 'punts',
          headerName: 'PUNTS',
          width: 120,
          type: 'number',
          pinnable: false,
          disableColumnMenu: true,
        },
        {
          field: 'average',
          headerName: 'AVG',
          width: 120,
          type: 'number',
          pinnable: false,
          disableColumnMenu: true,
        },
        {
          field: 'hangtime',
          headerName: 'HANG',
          width: 120,
          type: 'number',
          pinnable: false,
          disableColumnMenu: true,
        },
        {
          field: 'coffins',
          headerName: 'COFFIN',
          width: 120,
          type: 'number',
          pinnable: false,
          disableColumnMenu: true,
        },
        {
          field: 'inside_five',
          headerName: 'INS 5',
          width: 120,
          type: 'number',
          pinnable: false,
          disableColumnMenu: true,
        },
        {
          field: 'inside_ten',
          headerName: 'INS 10',
          width: 120,
          type: 'number',
          pinnable: false,
          disableColumnMenu: true,
        },
        {
          field: 'inside_twenty',
          headerName: 'INS 20',
          width: 120,
          type: 'number',
          pinnable: false,
          disableColumnMenu: true,
        },
        {
          field: 'touchbacks',
          headerName: 'TB',
          width: 120,
          type: 'number',
          pinnable: false,
          disableColumnMenu: true,
        },
        {
          field: 'gm_rating',
          headerName: 'GM RTG',
          width: 120,
          type: 'number',
          pinnable: false,
          valueGetter: (value, row) => {
            return getPuntingGmRating(row);
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
            <Stack sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
              <Link
                href={`https://glb2.warriorgeneral.com/game/player/${params.row.id}`}
                target='_blank'
                style={{ color: 'inherit', textDecoration: 'inherit', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
              >
                <strong>{params.value}</strong>
              </Link>
              <Typography variant='caption'>{params.row.team_name}</Typography>
            </Stack>
          ),
        },
        {
          field: 'punts',
          headerName: 'PUNTS',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'average',
          headerName: 'AVG',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'hangtime',
          headerName: 'HANG',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'coffins',
          headerName: 'COFFIN',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'inside_five',
          headerName: 'INS 5',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'inside_ten',
          headerName: 'INS 10',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'inside_twenty',
          headerName: 'INS 20',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'touchbacks',
          headerName: 'TB',
          flex: 1,
          type: 'number',
          pinnable: false,
        },
        {
          field: 'gm_rating',
          headerName: 'GM RTG',
          flex: 1,
          type: 'number',
          pinnable: false,
          valueGetter: (value, row) => {
            return getPuntingGmRating(row);
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
        pageSizeOptions={[12, 24, 50, 100]}
        density='compact'
        getRowHeight={({ id, densityFactor }) => (desktop ? 'auto' : 52 * densityFactor)}
        disableRowSelectionOnClick
        disableDensitySelector
        getCellClassName={() => {
          return desktop ? 'desktop-text' : 'mobile-text';
        }}
        slots={{ toolbar: CustomGridToolbar }}
        slotProps={{ toolbar: { tierFilter: setTier, tierOptions: ['Rookie', 'Sophomore', 'Professional', 'Veteran'] } }}
        initialState={{
          sorting: { sortModel: [{ field: 'gm_rating', sort: 'desc' }] },
          pagination: { paginationModel: { pageSize: 12 } },
          pinnedColumns: {
            left: ['player_name'],
          },
        }}
      />
    </Box>
  );
}
