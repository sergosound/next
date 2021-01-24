// @flow
import React from "react";
import Link from "next/link";

type Props = $Exact<{
  href: string,
  as?: string,
  children: Node,
}>;

// $FlowFixMe
export default function L<Props>({ href, as, children }) {
  return (
    <Link href={href} as={as}>
      {children}
    </Link>
  );
}
