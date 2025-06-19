'use client';

import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';

export default function Logo() {
  return (
    <Box component={Link} href="/" sx={{ display: 'inline-flex', alignItems: 'center' }}>
      {/* Heart-girl dollar logo */}
      <Image
        src="/images/cweatorlogo.png"
        alt="CWEATORS logo"
        width={36}
        height={36}
        priority
      />
      {/* Text logo */}
      <Image
        src="/images/textlogo.png"
        alt="CWEATORS"
        width={120}
        height={24}
        priority
        style={{ marginLeft: 8 }}
      />
    </Box>
  );
}
