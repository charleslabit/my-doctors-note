"use client";
import { Container, Divider, Group, List, Stack, Text } from "@mantine/core";

export const PrivacyPolicy = () => {
  return (
    <Container size={726} py="lg">
      <Text fz={52} mb={40}>
        Privacy Policy
      </Text>
      <Text fw={500} fz={16} mb={16}>
        <strong>Last Updated: February 4, 2025</strong>
      </Text>

      <Text fz={16} lh={2}>
        <strong>IMPORTANT NOTICE:</strong> BY ACCESSING, UTILIZING, OR ENGAGING
        WITH THIS DIGITAL PLATFORM, YOU IRREVOCABLY ASSENT TO THE DATA
        COLLECTION, UTILIZATION, AND DISCLOSURE PRACTICES ENUMERATED HEREIN.
        NON-COMPLIANCE NECESSITATES IMMEDIATE CESSATION OF ALL USAGE AND
        RESTRICTION FROM FUTURE ENGAGEMENTS.
      </Text>

      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          1. INTRODUCTION
        </Text>
        <Text fz={16} lh={2}>
          <strong>COMPANY NAME</strong>, a duly incorporated entity within the
          jurisdiction of Hong Kong (hereinafter referred to as "Company," "We,"
          "Us," "Our"), exclusively operates the domain MedExcuse.com
          (hereinafter referred to as "Website"). Said digital infrastructure
          solely facilitates the automated rendering of template-based
          documentation predicated upon user-inputted informational variables.
          We neither engage in the practice of medicine, nor are we recognized
          as a licensed healthcare entity or a legally sanctioned institution
          capable of authenticating medical conditions or absences. <br />
          <br /> At no juncture do we undertake medical assessments, dispense
          medical counsel, or issue officially recognized documentation. The
          exclusive function of this service remains confined to the algorithmic
          generation of pre-structured document templates strictly for academic
          and referential purposes.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          2. INFORMATION WE COLLECT
        </Text>
        <Text fz={16}>
          The Company, through user interaction with the Website, accumulates
          and processes the following categorical data:
        </Text>

        <List withPadding spacing={16}>
          <List.Item>
            <strong>Personally Identifiable Information (PII):</strong>{" "}
            Including but not limited to names, email addresses, IP addresses,
            transactional records, and digital identifiers.
          </List.Item>
          <List.Item>
            <strong>Device and Analytical Data:</strong> Encompassing browser
            type, device specifications, session durations, access timestamps,
            and navigation patterns.
          </List.Item>
          <List.Item>
            <strong>Transactional Information:</strong> Relating to payments,
            invoices, refunds, and service interactions conducted through the
            Website.
          </List.Item>
          <List.Item>
            <strong>User-Supplied Content:</strong> Data inputted by the user
            into form fields for document generation.
          </List.Item>
        </List>

        <Text>
          All data collection is executed through encrypted channels and
          safeguarded under industry-standard security protocols.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          3. PURPOSE OF DATA COLLECTION
        </Text>
        <Text>We deploy collected data exclusively for:</Text>
        <List spacing={16}>
          <List.Item>
            Facilitating automated document generation per user specifications.
          </List.Item>
          <List.Item>
            Processing financial transactions and furnishing electronic
            receipts.
          </List.Item>
          <List.Item>
            Enforcing compliance with our Terms of Service and fraud prevention.
          </List.Item>
          <List.Item>
            Enhancing website functionality, operational security, and user
            experience optimization.
          </List.Item>
          <List.Item>
            Conducting legal and regulatory compliance evaluations as
            necessitated by governing authorities.
          </List.Item>
        </List>
        <Text>
          User data shall NOT be utilized for medical diagnostics, third-party
          advertising, or unauthorized disclosure outside the stipulated
          conditions below.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          4. DATA RETENTION & STORAGE
        </Text>
        <Text>
          User-provided data shall be retained strictly for the duration
          necessary to fulfill the stated purposes of collection. Following
          completion of service or user request for deletion, all personally
          identifiable data shall be permanently expunged, except where legally
          mandated retention periods apply.
          <br />
          <br />
          Data is stored on secure, access-restricted servers and subject to
          routine integrity audits to ensure compliance with international data
          protection regulations.
        </Text>
      </Stack>

      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          5. DISCLOSURE OF INFORMATION
        </Text>
        <Text>
          User data shall NOT be disclosed, sold, leased, or otherwise
          transferred to unauthorized third parties except under the following
          circumstances:
        </Text>
        <List spacing={16}>
          <List.Item>
            <strong>Legal Obligations:</strong> Where mandated by judicial
            orders, statutory obligations, or government directives, including
            fraud investigations or compliance audits.
          </List.Item>
          <List.Item>
            <strong>Transactional Necessity:</strong> Disclosure to payment
            processors, hosting services, or technical infrastructure providers
            strictly for operational facilitation.
          </List.Item>
          <List.Item>
            <strong>Fraud Prevention & Security:</strong> In instances of
            suspected fraudulent activity, abuse, or unauthorized usage of our
            platform, data may be shared with law enforcement or cybersecurity
            entities.
          </List.Item>
        </List>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          6. COOKIES & TRACKING TECHNOLOGIES
        </Text>
        <Text>
          The Website employs cookies, log files, and analytical tracking
          technologies to monitor session behaviors, enhance functionality, and
          ensure secure authentication. Users may configure browser settings to
          restrict or disable cookies; however, doing so may impair the
          functionality of certain Website features.
        </Text>
      </Stack>
      <Divider m="70px 0" />
      <Stack gap={16}>
        <Text fz={18} fw="bold">
          7. USER RIGHTS & DATA CONTROL
        </Text>
        <Text>
          Users domiciled in the United States or other applicable jurisdictions
          retain the following rights regarding personal data:
        </Text>

        <List spacing={16}>
          <List.Item>
            <strong> Access & Portability:</strong> Request access to stored
            data and obtain copies in a structured format.
          </List.Item>
          <List.Item>
            <strong>Rectification:</strong> Modify or update any erroneous or
            outdated information.
          </List.Item>
          <List.Item>
            <strong>Erasure & Deletion:</strong> Demand deletion of personally
            identifiable data, subject to legal retention requirements.
          </List.Item>
          <List.Item>
            <strong>Opt-Out:</strong> Revoke consent for non-essential data
            collection and processing.
          </List.Item>
        </List>
        <Text>
          All requests shall be processed within a reasonable timeframe upon
          verification of the user’s identity.
        </Text>
      </Stack>
      <Divider m="70px 0" />
      <Stack gap={16}>
        <Text fz={18} fw="bold">
          8. DATA SECURITY MEASURES
        </Text>
        <Text>
          We employ rigorous encryption standards, firewall protections, and
          continuous intrusion detection monitoring to safeguard user data from
          unauthorized access, breach, or misuse. Despite our efforts, no
          digital transmission is infallible; therefore, we disclaim liability
          for data interception or unauthorized access resulting from cyber
          threats beyond our control.
        </Text>
      </Stack>
      <Divider m="70px 0" />
      <Stack gap={16}>
        <Text fz={18} fw="bold">
          9. THIRD-PARTY LINKS & EXTERNAL INTEGRATIONS
        </Text>
        <Text>
          Our Website may contain hyperlinks directing users to external domains
          operated by third parties. We assume no responsibility for the privacy
          policies, data security measures, or content accuracy of such
          third-party sites. Users navigating away from our Website acknowledge
          that their engagement with external platforms is governed exclusively
          by the respective entities’ policies.
        </Text>
      </Stack>
      <Divider m="70px 0" />
      <Stack gap={16}>
        <Text fz={18} fw="bold">
          10. MODIFICATIONS TO PRIVACY POLICY
        </Text>
        <Text>
          We reserve the unilateral right to modify, amend, or update this
          Privacy Policy at any time without prior notice. Continued engagement
          with our services following any modifications constitutes tacit
          acceptance of the revised terms.
        </Text>
      </Stack>
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
