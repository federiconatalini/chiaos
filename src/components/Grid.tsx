import type { HTMLAttributes } from 'react';

type GridProperties = HTMLAttributes<HTMLElement>;

export default function Grid({ children, className }: GridProperties) {
  const additionalStyle = className ?? '';

  return (
    <section
      className={`grid-cols-xs lg:grid-cols-lg mx-auto grid w-full auto-rows-min gap-x-2 px-2 lg:px-16 xl:px-32 ${additionalStyle}`}
    >
      {children}
    </section>
  );
}
