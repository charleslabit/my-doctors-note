import { CallToAction } from "@/components/CallToAction";
import { InfoGrid } from "@/components/InfoGrid";
import { StepsCards } from "@/components/StepsCards";
import {
  AspectRatio,
  Box,
  Card,
  Container,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <>
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
            <Text fw={700} fz={50} lh={1}>
              Your Doctor's Note
            </Text>
            <Text fw={600} fz={50} lh={1}>
              In 1 Minute, for $29.99!
            </Text>
            <Image
              src={
                "https://cdn.prod.website-files.com/674755c8acccd926c40d29ae/677ec92e3d12277fa484e390_Vector%206599.svg"
              }
              alt="My Doctors Note"
              width={434}
              height={9.75}
            />

            <CallToAction label="Get your Note Now" c="white" />
          </Stack>
        </Box>
      </Box>

      <Stack align="center" p={"30px 1px0"}>
        <Box>
          <Text fz={48} fw={600} lh={1} ta="center">
            Get An Online Doctor's
          </Text>
          <Text fz={48} fw={600} lh={1} ta="center">
            Note In 3 Easy Steps
          </Text>
        </Box>
        <Text fz={18} lh={1}>
          With our online platform we make it quick and simple for you to obtain
        </Text>
        <Text fz={18} lh={1}>
          a doctors note, so you can focus on rest and recovery.
        </Text>
        <StepsCards />

        <CallToAction />
      </Stack>

      <Container size={1200} p="30px 10px">
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
              <Text fz={18} lh={1}>
                We will refund 100% of your payment, in case you're not 100%
              </Text>
              <Text fz={18} lh={1}>
                satisfied with our service.
              </Text>
            </Stack>
          </Group>
        </Card>

        {/* Hero Section */}
        <Stack align="center" gap="xs" mt={20} mb={20}>
          <Text fz={48} fw={600} lh={1}>
            Get Peace of Mind
          </Text>
          <Text fz={48} c="#2323FD" fw={600} lh={1}>
            With My Doctors Note
          </Text>
          <Image
            src="https://cdn.prod.website-files.com/674755c8acccd926c40d29ae/678b383926e210a9cdedefc3_Vector%206601.svg"
            height={8}
            width={263}
            alt="Curve Line"
          />
          <Box>
            <Text fz={18} lh={1.5}>
              My Doctor’s Note provides a fast, hassle-free solution for
              <br /> obtaining excuse notes. Focus on your recovery while we
              <br /> take care of the paperwork, delivering your note in
              minutes..
            </Text>
          </Box>
        </Stack>

        <InfoGrid />

        <CallToAction />
      </Container>
    </>
  );
}
