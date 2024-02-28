// // components/CourseCard.js
"use client";

interface CourseCardProps {
  courseName: string;
  description: string;
  courseCover: string;
}
import React from "react";
import Link from "next/link";
import { Card, Typography } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import Image from "next/image";

const { Meta } = Card;
const { Text } = Typography;

const CourseCard = ({
  courseName,
  description,
  courseCover,
}: CourseCardProps) => {
  return (
    <Link href="#" passHref>
      <Card
        hoverable
        cover={
          <Image
            alt="Course Cover"
            src={courseCover}
            width={100}
            height={100}
          />
        }
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <PlayCircleOutlined key="play" />,
          <Link href="#" passHref key="linkCourse">
            Learn More
          </Link>,
        ]}
      >
        <Meta
          title={<Text strong>{courseName}</Text>}
          description={<Text>{description}</Text>}
        />
      </Card>
    </Link>
  );
};

export default CourseCard;
