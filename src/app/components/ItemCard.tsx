"use client";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

export type ItemType = {
  id: number;
  title: string;
  constent: string;
  image: string;
};

const Wrapper = styled.div`
  display: flex;
`;

// dummy item list
const itemList = [
  {
    id: 1,
    title: "피크닉 세트 만들기 🍱",
    content:
      "가장 인기많은 클래스 ! 댕김밥, 주먹밥, \n 핫도그 등 피크닉 세트를 만들어요 !",
    image: "/class_example.jpeg",
  },
  {
    id: 2,
    title: "피크닉 세트 만들기 🍱",
    content:
      "가장 인기많은 클래스 ! 댕김밥, 주먹밥, \n 핫도그 등 피크닉 세트를 만들어요 !",
    image: "/class_example.jpeg",
  },
  {
    id: 3,
    title: "피크닉 세트 만들기 🍱",
    content:
      "가장 인기많은 클래스 ! 댕김밥, 주먹밥, \n 핫도그 등 피크닉 세트를 만들어요 !",
    image: "/class_example.jpeg",
  },
];

export default function ItemCard() {
  return (
    <Wrapper>
      {itemList.map((card) => (
        <Card sx={{ width: 300, height: 450 }} key={card.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="medium" color="primary">
              예약하기
            </Button>
          </CardActions>
        </Card>
      ))}
    </Wrapper>
  );
}
