import React, { useState } from 'react';

import { Appbar } from '~/ui/layouts/Appbar';
import { Content } from '~/ui/layouts/Content';
import type { ContentProps } from '~/ui/layouts/Content';
import { Flex } from '~/ui/layouts/Flex';
import { Main } from '~/ui/layouts/Main';
import { Navbar } from '~/ui/layouts/Navbar';
import type { NavbarProps } from '~/ui/layouts/Navbar';

import type { FC } from 'react';

export type PageProps = ContentProps & {
  nav?: ReturnType<FC>;
};

export const Page = ({ nav, ...props }: PageProps) => {
  const [openNavbar, setOpenNavbar] = useState<NavbarProps['open']>(false);
  const handleToggleMenu = nav ? () => setOpenNavbar(!openNavbar) : undefined;

  return (
    <Main>
      <Appbar onMenuClick={handleToggleMenu} />
      <Flex sx={{ flex: 1, overflow: 'hidden' }}>
        {nav && (
          <Navbar open={openNavbar} onClose={handleToggleMenu}>
            {nav}
          </Navbar>
        )}
        <Content {...props} />
      </Flex>
    </Main>
  );
};
