import { Anchor, Container, Stack, Text } from "@mantine/core";

export const ContactUs = () => {
  return (
    <Container size="md" p={20} mt={50}>
      <Text fz={52} mb={10}>
        Contact Us
      </Text>
      <Text mb={20} fz={16}>
        We are available to answer any questions or concerns you may have.
      </Text>

      <Stack gap="sm">
        <Text fw={700} fz={16}>
          Customer Support:
        </Text>
        <Text fz={16}>Mon-Fri, 9am-6pm CET</Text>

        <Text fw={700} fz={16}>
          Email:
        </Text>
        <Anchor href="mailto:support@medexcuse.com">
          support@medexcuse.com
        </Anchor>

        <Text fw={700} fz={16}>
          Company details:
        </Text>
        <Text fz={16}>COMPANY NAME & ADDRESS</Text>

        <Text fw={700} fz={16}>
          Company registration number:
        </Text>
        <Text fz={16}>76987496</Text>
      </Stack>
    </Container>
  );
};
