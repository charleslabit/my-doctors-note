"use client";
import {
  Card,
  Container,
  Grid,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const steps = [
  {
    image:
      "http://mydoctorsnote.co/cdn/shop/files/gempages_552571548410578040-c1052790-a784-4835-bbf2-dc4210ca3f05.webp?v=1555244339749561678",
    title: "Fill In The Smart Form",
    description:
      "Indicate your illness and the desired duration. It's quick and intuitive.",
  },
  {
    image:
      "http://mydoctorsnote.co/cdn/shop/files/gempages_552571548410578040-ae65445c-763e-4dec-b480-2672ea0e576f.webp?v=15256280629255606185",
    title: "Receive Your PDF In 1 Minute",
    description:
      "After you've completed the checkout, your pre-filled sick leave will be sent by email within 1 minute, and it will be ready on the payment confirmation page.",
  },
  {
    image:
      "http://mydoctorsnote.co/cdn/shop/files/gempages_552571548410578040-7f0158d3-8fcf-43b2-bf33-15090054dc8b.webp?v=10598470062095996498",
    title: "100% Satisfaction Guarantee",
    description:
      "Join hundreds of thousands of satisfied customers who trust us. Our sick leave plans are easy to use and designed to meet your needs quickly and efficiently!",
  },
];

export const StepsCards = () => {
  return (
    <Container size="lg" py={50}>
      <Grid gutter="xl">
        {steps.map((step, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 4 }}>
            <Card
              shadow="md"
              radius="md"
              padding="lg"
              withBorder
              bg="#E8F1FF"
              h="100%"
            >
              <Stack align="center" gap="md">
                <Image src={step.image} alt={step.title} radius="md" />
                <Title order={4} ta="center">
                  {step.title}
                </Title>
                <Text ta="center" c="gray.7">
                  {step.description}
                </Text>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};
