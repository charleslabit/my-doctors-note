"use client";
import { Button, Group, Stack, Text } from "@mantine/core";
import { useIntersection } from "@mantine/hooks";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const CallToAction = ({
  label = "Get your Doctors Note Now",
  c = "#626262",
}: {
  label?: string;
  c?: string;
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, entry } = useIntersection({
    root: null, // Uses viewport as the root
    threshold: 0.5,
  });
  useEffect(() => {
    if (entry?.isIntersecting && !hasAnimated) {
      setHasAnimated(true); // Mark as animated once it enters
    }
  }, [entry?.isIntersecting, hasAnimated]);
  return (
    <Stack align="center" mt="xl">
      <div ref={ref} className={hasAnimated ? "fadein" : "hidden"}>
        <Button
          h={60}
          w={350}
          p="14px 20px"
          radius="md"
          color="#2323F3"
          rightSection={<IconArrowRight size={18} />}
          fz={18}
        >
          {label}
        </Button>
      </div>
      {/* Guarantee Section */}
      <Group gap={10}>
        <Image
          src="https://cdn.prod.website-files.com/674755c8acccd926c40d29ae/677ed137d0a7cf57ffb400b3_617922efaeb3a92e70ebd1b3_Security%2520Icon.svg%20fill.svg"
          height={32}
          width={33}
          alt="Shield Check"
        />

        <Text size="sm" c={c}>
          100% Risk-Free Money Back Guarantee
        </Text>
      </Group>
    </Stack>
  );
};
