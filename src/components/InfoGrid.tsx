import {
  Card,
  Group,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";

const cardData = [
  {
    title: "Trusted by Thousands Across the USA",
    items: [
      {
        label: "Professional & Reliable",
        desc: "Includes key medical absence details in a format widely recognized by workplaces.",
      },
      {
        label: "Essential Information",
        desc: "Clearly structured while protecting your privacy.",
      },
      {
        label: "Instant & Hassle-Free",
        desc: "No appointments, no waiting. Receive your document within seconds via email.",
      },
    ],
    footer: (
      <Group justify="center" gap={20}>
        <Image
          h={30}
          src={
            "http://mydoctorsnote.co/cdn/shop/files/gempages_552571548410578040-9a2cfbe1-9947-4a93-8b87-51daab807ae9.svg?v=9179125968312600342"
          }
        />
        <Image
          h={30}
          src={
            "http://mydoctorsnote.co/cdn/shop/files/gempages_552571548410578040-6817383f-7f4d-4e15-8e1c-05fed29356e4.svg?v=6620021932238837395"
          }
        />
        <Image
          h={30}
          src={
            "http://mydoctorsnote.co/cdn/shop/files/gempages_552571548410578040-90e43877-7d57-4219-af6e-0dd369345276.webp?v=13122274733600443923"
          }
        />
      </Group>
    ),
  },
  {
    title: "Get Your Note In Under 1 Minute",
    items: [
      {
        label: "Skip the Wait",
        desc: "No appointments, no delays. Get what you need instantly, anytime.",
      },
      {
        label: "Available 24/7",
        desc: "No need to schedule weeks in advance. Access your document on demand, day or night.",
      },
      {
        label: "Instant Email Delivery",
        desc: "Receive your note directly in your inbox, ready to use.",
      },
    ],
  },
  {
    title: "Customer Support That Puts You First",
    items: [
      {
        label: "Adjustable to Your Needs",
        desc: "Easily modify details to match your situation.",
      },
      {
        label: "Always Here for You",
        desc: "Get assistance whenever you need it, day or night.",
      },
      {
        label: "Real People, Real Support",
        desc: "Our team is here to help, every step of the way.",
      },
    ],
    footer: (
      <Group justify="center" gap={20}>
        <Image
          w={234}
          h={50}
          src={
            "https://cdn.prod.website-files.com/674755c8acccd926c40d29ae/6789e26f1ee5aa607faa42ac_Frame%202147207361.png"
          }
        />
        <Text fz={22} c="#00C48C" fw={"bold"}>
          We're ready to help!
        </Text>
      </Group>
    ),
  },
];

function InfoCard({
  title,
  items,
  footer,
}: {
  title: string;
  items: { label: string; desc: string }[];
  footer?: React.ReactNode;
}) {
  return (
    <Card shadow="sm" p="md" radius="md" bg="#D8E8FD">
      <Stack gap="xs">
        <Text fz={24} fw={600}>
          {title}
        </Text>
        <List spacing="xs" c="#585858">
          {items.map((item, index) => (
            <ListItem key={index}>
              <strong>{item.label}</strong> - {item.desc}
            </ListItem>
          ))}
        </List>
        {footer}
      </Stack>
    </Card>
  );
}

function PriceCard() {
  return (
    <Card shadow="sm" p="md" radius="md" bg="#D8E8FD">
      <Stack gap="xs" align="center">
        <Text fz={24} fw={600}>
          The Best Price In The Market
        </Text>
        <Text fz={30} td="line-through" c="#585858">
          $42.99
        </Text>
        <Text fw={700} fz={70}>
          $29.99
        </Text>
        <Text c="#00C48C" fw={"bold"} fz={24}>
          30% Discount - Limited Time!
        </Text>
      </Stack>
    </Card>
  );
}

export function InfoGrid() {
  return (
    <SimpleGrid cols={{ sm: 1, md: 2 }} mt={10}>
      {cardData.map((card, index) => (
        <InfoCard
          key={index}
          title={card.title}
          items={card.items}
          footer={card.footer}
        />
      ))}
      <PriceCard />
    </SimpleGrid>
  );
}
