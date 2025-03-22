"use client";
import { Anchor, Center, Divider, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname(); // Get the current path
  const router = useRouter();

  const isActive = (href: string) => pathname === href;
  return (
    <>
      <Center pos="relative" p="0 10px">
        <Group align="start" justify="space-between" w={1200}>
          {/* Brand & Support */}
          <Stack>
            <Image
              className="cursor-pointer"
              onClick={() => router.push("/")}
              width={165}
              height={20.19}
              alt="My Doctors Note logo"
              src="https://mydoctorsnote.co/cdn/shop/files/bcnjac0hn1ggv3xvmavh.webp?v=1740566885&width=50%2050w,%20//mydoctorsnote.co/cdn/shop/files/bcnjac0hn1ggv3xvmavh.webp?v=1740566885&width=100%20100w,%20//mydoctorsnote.co/cdn/shop/files/bcnjac0hn1ggv3xvmavh.webp?v=1740566885&width=150%20150w,%20//mydoctorsnote.co/cdn/shop/files/bcnjac0hn1ggv3xvmavh.webp?v=1740566885&width=200%20200w,%20//mydoctorsnote.co/cdn/shop/files/bcnjac0hn1ggv3xvmavh.webp?v=1740566885&width=300%20300w,%20//mydoctorsnote.co/cdn/shop/files/bcnjac0hn1ggv3xvmavh.webp?v=1740566885&width=400%20400w,%20//mydoctorsnote.co/cdn/shop/files/bcnjac0hn1ggv3xvmavh.webp?v=1740566885&width=550%20550w,%20//mydoctorsnote.co/cdn/shop/files/bcnjac0hn1ggv3xvmavh.webp?v=1740566885&width=800%20800w,%20//mydoctorsnote.co/cdn/shop/files/bcnjac0hn1ggv3xvmavh.webp?v=1740566885&width=1100%201100w"
            />
            <Text fz={16} mt={16}>
              <strong>Support</strong> (Mon-Fri, 9am-6pm EST)
            </Text>
            <Group align="baseline" gap={5}>
              <Text fz={16} mt="xs">
                <strong>Email:</strong>
              </Text>
              <Anchor href="mailto:help@urgentsupport.co">
                help@urgentsupport.co
              </Anchor>
            </Group>
          </Stack>

          {/* Customer Service */}
          <Stack>
            <Text fz={18} fw={700}>
              Customer service
            </Text>
            <Anchor
              href="/contact"
              style={{
                textDecoration: isActive("/contact") ? "underline" : "none",
              }}
            >
              Contact Us
            </Anchor>
            <Anchor href="mailto:help@urgentsupport.co">Refund Requests</Anchor>
            <Anchor
              href="/frequently-asked-questions"
              style={{
                textDecoration: isActive("/frequently-asked-questions")
                  ? "underline"
                  : "none",
              }}
            >
              Frequently Asked Questions
            </Anchor>
          </Stack>

          {/* Policies */}
          <Stack>
            <Text fz={18} fw={700}>
              Policies
            </Text>
            <Anchor
              href="/terms-of-service"
              style={{
                textDecoration: isActive("/terms-of-service")
                  ? "underline"
                  : "none",
              }}
            >
              Terms Of Service
            </Anchor>
            <Anchor
              href="/refund-policy"
              style={{
                textDecoration: isActive("/refund-policy")
                  ? "underline"
                  : "none",
              }}
            >
              Refund Policy
            </Anchor>
            <Anchor
              href="/privacy-policy"
              style={{
                textDecoration: isActive("/privacy-policy")
                  ? "underline"
                  : "none",
              }}
            >
              Privacy Policy
            </Anchor>
            <Anchor
              href="/disclaimer-policy"
              style={{
                textDecoration: isActive("/disclaimer-policy")
                  ? "underline"
                  : "none",
              }}
            >
              Disclaimer Policy
            </Anchor>
            <Anchor
              href="/intellectual-property-policy"
              style={{
                textDecoration: isActive("/intellectual-property-policy")
                  ? "underline"
                  : "none",
              }}
            >
              Intellectual Property Policy
            </Anchor>
            <Anchor
              href="/jurisdiction-policy"
              style={{
                textDecoration: isActive("/jurisdiction-policy")
                  ? "underline"
                  : "none",
              }}
            >
              Jurisdiction Policy
            </Anchor>
            <Anchor
              href="/limitation-of-liability-policy"
              style={{
                textDecoration: isActive("/limitation-of-liability-policy")
                  ? "underline"
                  : "none",
              }}
            >
              Limitation of Liability Policy
            </Anchor>
            <Anchor
              href="/indemnification-policy"
              style={{
                textDecoration: isActive("/indemnification-policy")
                  ? "underline"
                  : "none",
              }}
            >
              Indemnification Policy
            </Anchor>
          </Stack>

          {/* Company Details */}
          <Stack>
            <Text fz={18} fw={700}>
              Company Details
            </Text>
            <Text>COMPANY NAME & ADDRESS</Text>
            <Text>Company registration number: 000000</Text>
          </Stack>
        </Group>
      </Center>
      <Divider my="md" />
      <Text ta="center" fz={11} p={"50px 0"} c="#121212BF">
        © 2025, My Doctors Note
      </Text>
    </>
  );
};
