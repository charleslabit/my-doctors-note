import { InfoGrid } from "@/components/InfoGrid";
import { StepsCards } from "@/components/StepsCards";
import {
  AspectRatio,
  Box,
  Button,
  Card,
  Center,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Center p={"20px 50px"} m="0 17px">
        <Box p={7.5}>
          <Image
            width={240}
            height={29.5}
            src={
              "https://mydoctorsnote.co/cdn/shop/files/bcnjac0hn1ggv3xvmavh.webp?v=1740566885&width=600"
            }
            alt="My Doctors Note"
          />
        </Box>
      </Center>

      <Box pos="relative">
        <AspectRatio ratio={16 / 9} h={503}>
          <Image
            src={
              "https://mydoctorsnote.co/cdn/shop/files/gempages_552571548410578040-94723b57-4f3f-4aad-8f50-37d3ae610588.webp?v=5811460035000724715"
            }
            alt="My Doctors Note"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            style={{
              objectFit: "cover",
            }}
          />
          {/* Dark Overlay */}
          <Box
            pos="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            bg="rgba(0, 0, 0, 0.6)" // Adjust darkness level here
          />
        </AspectRatio>

        {/* Text Overlay */}
        <Box
          pos="absolute"
          top="50%"
          left="50%"
          style={{
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            width: "100%",
            padding: "0 20px",
          }}
        >
          <Stack align="center" gap="md">
            <Text fw={700} fz={50}>
              Your Doctor's Note
            </Text>
            <Text fw={600} fz={50}>
              In 1 Minute, for $29.99!
            </Text>
            <Button
              w={350}
              h={60}
              fz={18}
              radius="md"
              c="white"
              bg="#2323F3"
              p="14px 20px"
              rightSection={<IconArrowRight />}
            >
              Get your Note Now
            </Button>
            <Box w={350}>
              <Text fz={16}> ✅ 100% Risk-Free Money Back Guarantee</Text>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Stack align="center">
        <Box>
          <Text fz={48}>Get An Online Doctor's</Text>
          <Text fz={48}> Note In 3 Easy Steps</Text>
        </Box>
        <Text fz={18}>
          With our online platform we make it quick and simple for you to obtain
        </Text>
        <Text fz={18}>
          a doctors note, so you can focus on rest and recovery.
        </Text>
        <StepsCards />
        <Stack align="center" gap="md">
          {/* CTA Button */}
          <Button
            radius="md"
            color="#2323F3"
            rightSection="→"
            fw="bold"
            fz={16}
          >
            Get your Note Now
          </Button>

          {/* Guarantee Section */}
          <Group gap={10}>
            <Image
              src="https://cdn.prod.website-files.com/674755c8acccd926c40d29ae/677ed137d0a7cf57ffb400b3_617922efaeb3a92e70ebd1b3_Security%2520Icon.svg%20fill.svg"
              height={32}
              width={33}
              alt="Shield Check"
            />

            <Text size="sm" c="#626262">
              100% Risk-Free Money Back Guarantee
            </Text>
          </Group>
        </Stack>
      </Stack>

      <Container size={1200} py="xl">
        {/* Money Back Guarantee Banner */}
        <Card radius="md" shadow="sm" p="lg" bg="teal.1">
          <Group align="center" justify="center">
            <Image
              src="https://cdn.prod.website-files.com/674755c8acccd926c40d29ae/6790d778b0c1c07478996883_Group%201321319131.svg"
              height={179}
              width={144}
              alt="Shield Check"
            />

            <Stack gap={0}>
              <Text fw={700} fz={32}>
                Money Back Guarantee!
              </Text>
              <Text fz={18}>
                We will refund 100% of your payment if you're not fully
                satisfied.
              </Text>
            </Stack>
          </Group>
        </Card>

        {/* Hero Section */}
        <Stack align="center" gap="xs" mt="lg">
          <Title order={2}>Get Peace of Mind</Title>
          <Title order={3} c="blue">
            With My Doctors Note
          </Title>
          <Text ta="center" maw={600}>
            My Doctor’s Note provides a fast, hassle-free solution for obtaining
            excuse notes.
          </Text>
        </Stack>

        <InfoGrid />

        {/* Call-To-Action */}
        <Stack align="center" mt="xl">
          <Button
            size="lg"
            radius="md"
            color="#2323F3"
            rightSection={<IconArrowRight size={18} />}
          >
            Get your Doctors Note Now
          </Button>
          {/* Guarantee Section */}
          <Group gap={10}>
            <Image
              src="https://cdn.prod.website-files.com/674755c8acccd926c40d29ae/677ed137d0a7cf57ffb400b3_617922efaeb3a92e70ebd1b3_Security%2520Icon.svg%20fill.svg"
              height={32}
              width={33}
              alt="Shield Check"
            />

            <Text size="sm" c="#626262">
              100% Risk-Free Money Back Guarantee
            </Text>
          </Group>
        </Stack>
      </Container>
    </>
  );
}
