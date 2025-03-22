"use client";
import { Container, Divider, Group, List, Stack, Text } from "@mantine/core";

export const RefundPolicy = () => {
  return (
    <Container size={726} py="lg">
      <Text fz={52} mb={40}>
        Refund Policy
      </Text>
      <Text fw={500} fz={16} mb={16}>
        <strong>Last Updated: February 4, 2025</strong>
      </Text>

      <Text fz={16} lh={2}>
        <strong>IMPORTANT NOTICE:</strong> BY UTILIZING THE SERVICES PROVIDED
        THROUGH MED EXCUSE, YOU UNEQUIVOCALLY ACKNOWLEDGE AND CONSENT TO THE
        REFUND CONDITIONS STIPULATED HEREIN. FAILURE TO COMPLY WITH THESE TERMS
        SHALL RESULT IN THE IMMEDIATE FORFEITURE OF ANY CLAIM TO REIMBURSEMENT
        OR COMPENSATION.
      </Text>

      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          1. GENERAL POLICY STATEMENT
        </Text>
        <Text fz={16} lh={2}>
          <strong>COMPANY NAME</strong> (hereinafter referred to as "Company,"
          "We," "Us," "Our") exclusively facilitates the automated generation of
          user-supplied template documents via the domain MedExcuse.com
          (hereinafter referred to as "Website"). As our services pertain
          strictly to the provision of non-certified, non-verified, and purely
          informational template documentation, all transactions are deemed
          final and binding, subject to the limited exceptions outlined below.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          2. REFUND ELIGIBILITY CRITERIA
        </Text>
        <Text fz={16}>
          A refund request shall be considered under the following expressly
          limited circumstances:
        </Text>

        <List withPadding spacing={16}>
          <List.Item>
            <strong>Dissatisfaction with Service:</strong> Users who are not
            satisfied with the generated template document may submit a written
            request for refund assessment, provided that the claim is made
            within <strong>seven (7) calendar days</strong> from the date of
            purchase.
          </List.Item>
          <List.Item>
            <strong>Technical Deficiency:</strong> If the document delivered
            materially deviates from the specifications provided at the time of
            order, the user must notify support within{" "}
            <strong>three (3) calendar days</strong>
            of receipt for a remedial correction or refund evaluation.
          </List.Item>
          <List.Item>
            <strong>Duplicate Transactions:</strong> In cases of accidental
            duplicate purchases of the same document, a refund may be granted
            upon verification of redundant transactions within our payment
            system.
          </List.Item>
          <List.Item>
            <strong>Failure to Receive Document:</strong> If a user has not
            received the purchased template within{" "}
            <strong>twenty-four (24) hours</strong>, despite correctly inputting
            an email address, they must contact support for reissuance or refund
            eligibility determination.
          </List.Item>
        </List>

        <Text>
          Refund requests not falling within these enumerated conditions shall
          be automatically denied.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          3. NON-REFUNDABLE CIRCUMSTANCES
        </Text>
        <Text>
          Under no circumstances shall refunds be issued for the following:
        </Text>
        <List spacing={16}>
          <List.Item>
            <strong>User Misuse or Misrepresentation:</strong> If the user
            attempts to utilize the template document for any fraudulent,
            deceptive, or otherwise improper purpose, as explicitly prohibited
            in the Terms of Service.
          </List.Item>
          <List.Item>
            <strong>Failure to Obtain Third-Party Acceptance:</strong> The
            Company does not guarantee or warrant the acceptance, validity, or
            recognition of its documents by any employer, institution, medical
            practitioner, governmental entity, insurance provider, or legal
            authority.
          </List.Item>
          <List.Item>
            <strong>Change of Mind:</strong> Refunds shall not be granted for
            users who no longer wish to use the document after purchase, absent
            a qualifying deficiency as stipulated in Section 2.
          </List.Item>
          <List.Item>
            <strong>Incorrect Data Input by User:</strong> The Company is not
            responsible for erroneous data inputted by the user at the time of
            form submission, and refunds shall not be granted for inaccuracies
            arising from user errors.
          </List.Item>
          <List.Item>
            <strong>Beyond the Refund Request Period:</strong> No refund
            requests shall be entertained beyond the prescribed refund
            eligibility periods.
          </List.Item>
        </List>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          4. REFUND REQUEST PROCEDURE
        </Text>
        <Text>
          To initiate a refund request, users must adhere to the following
          procedural steps:
        </Text>

        <List spacing={16} type="ordered">
          <List.Item>
            <strong>Submit a Formal Request:</strong> All refund claims must be
            submitted via email to <strong>support@medexcuse.com</strong> with
            the subject line "Refund Request - Order #[Your Order Number]."
          </List.Item>
          <List.Item>
            <strong>Provide Justification:</strong> The request must contain a
            detailed explanation of the refund basis, including screenshots or
            supporting evidence if applicable.
          </List.Item>
          <List.Item>
            <strong>Verification & Processing:</strong> Our support team shall
            review the claim within <strong>five (5) business days</strong> and
            render a determination regarding refund eligibility.
          </List.Item>
          <List.Item>
            <strong>Approved Refund Disbursement:</strong> If approved, the
            refund shall be issued via the original payment method within{" "}
            <strong>ten (10) business days</strong>, subject to processing
            timelines imposed by financial institutions.
          </List.Item>
        </List>
        <Text>
          Failure to comply with the aforementioned procedure may result in
          automatic denial of refund claims.
        </Text>
      </Stack>

      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          5. MODIFICATIONS TO REFUND POLICY
        </Text>
        <Text>
          We reserve the unilateral right to modify, amend, or rescind this
          Refund Policy at any time without prior notice. Any changes shall be
          immediately effective upon publication on the Website. Users are
          responsible for regularly reviewing this policy to ensure continued
          compliance.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          6. CONTACT INFORMATION
        </Text>
        <Text>
          For inquiries, assistance, or further elucidation, direct
          correspondence to:
        </Text>
        <List spacing={16}>
          <List.Item>
            <Group gap={5}>
              <strong>Company Name:</strong> COMPANY NAME
            </Group>
          </List.Item>
          <List.Item>
            <Group gap={5}>
              <strong>Registered Address:</strong> COMPANY ADDRESS
            </Group>
          </List.Item>
          <List.Item>
            <Group gap={5}>
              <strong>Company Registration Number:</strong> NUMBER
            </Group>
          </List.Item>
          <List.Item className="cursor-not-allowed">
            <Group gap={5}>
              <strong>Email:</strong>
              support@medexcuse.com
            </Group>
          </List.Item>
          <List.Item className="cursor-not-allowed">
            <Group gap={5}>
              <strong>Website:</strong>
              https://medexcuse.com
            </Group>
          </List.Item>
        </List>
      </Stack>
      <Divider m="70px 0" />
      <Text>
        By engaging with our services, you affirm that you have read,
        comprehended, and unconditionally agreed to the foregoing Terms of
        Service.
      </Text>
    </Container>
  );
};
