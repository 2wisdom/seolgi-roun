"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

type Route = {
  to: string;
  title: string;
};

type NavbarProps = {
  isLoggedIn: boolean;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }

  li a {
    text-decoration: none;
    color: #2e2e2e;
    padding: 5px;
  }
`;

const routes: Route[] = [
  {
    to: "/",
    title: "HOME",
  },
  {
    to: "/about",
    title: "ABOUT",
  },
  {
    to: "/class",
    title: "CLASS",
  },
  {
    to: "/shop",
    title: "SHOP",
  },
  {
    to: "/qna",
    title: "QnA",
  },
];

export default function Navbar({ isLoggedIn }: NavbarProps) {
  const dynamicRoutes: Route[] = isLoggedIn
    ? [
        ...routes,
        {
          to: "/me",
          title: "ME",
        },
      ]
    : [
        ...routes,
        {
          to: "/login",
          title: "LOGIN",
        },
      ];

  return (
    <Wrapper>
      <Link href="/">
        <Image alt="logo" src="/logo.svg" width={101} height={50} />
      </Link>
      <ul>
        {dynamicRoutes.map((route) => (
          <li key={route.to}>
            <Link className="nav-link" href={route.to}>
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
