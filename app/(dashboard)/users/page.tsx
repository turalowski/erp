'use client';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import {
  User,
  Contact,
  Warehouse,
  ShoppingCart,
  Send,
  LucideIcon,
} from 'lucide-react';
import { Nav } from './_components/nav';
import { Button } from '@/components/ui/button';

const tabs: {
  title: string;
  icon: LucideIcon;
  variant: 'ghost' | 'default';
}[] = [
  {
    title: 'Users',
    icon: User,
    variant: 'default',
  },
  {
    title: 'Contacts',
    icon: Contact,
    variant: 'ghost',
  },
  {
    title: 'Warehouse',
    icon: Warehouse,
    variant: 'ghost',
  },
  {
    title: 'Trade',
    icon: ShoppingCart,
    variant: 'ghost',
  },
];

export default function Users() {
  return (
    <main className="flex min-h-screen flex-col gap-3">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full grow rounded-lg border"
      >
        <ResizablePanel
          className="h-full"
          defaultSize={20}
          minSize={10}
          maxSize={20}
        >
          <div className="flex flex-col">
            <Button>Company</Button>
            <Nav isCollapsed={false} links={tabs} />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={80}>testo</ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
