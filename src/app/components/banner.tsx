"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Banner() {
  return (
    <Wrapper>
      <Link href="/">
        <Image src="/banner_logo.svg" alt="banner" width={433} height={212} />
      </Link>
    </Wrapper>
  );
}
