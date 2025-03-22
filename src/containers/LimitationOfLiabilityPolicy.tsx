"use client";
import { Container, Divider, Group, List, Stack, Text } from "@mantine/core";

export const LimitationOfLiabilityPolicy = () => {
  return (
    <Container size={726} py="lg">
      <Text fz={52} mb={40}>
        Jurisdiction Policy
      </Text>
      <Text fw={500} fz={16} mb={16}>
        <strong>Last Updated: February 4, 2025</strong>
      </Text>

      <Text fz={16} lh={2}>
        <strong>IMPORTANT NOTICE:</strong> BY ENGAGING WITH THE SERVICES OF MED
        EXCUSE, YOU UNEQUIVOCALLY ACKNOWLEDGE AND ACCEPT THE LIMITATIONS OF
        LIABILITY SET FORTH HEREIN. ANY DISAGREEMENT NECESSITATES IMMEDIATE
        CESSATION OF SERVICE UTILIZATION.
      </Text>

      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          1. ABSOLUTE DISCLAIMER OF LIABILITY
        </Text>
        <Text fz={16} lh={2}>
          <strong>COMPANY NAME</strong> (hereinafter referred to as "Company,"
          "We," "Us," "Our"), a duly registered entity under the jurisdiction of
          Hong Kong, HEREBY DISCLAIMS, TO THE FULLEST EXTENT PERMISSIBLE UNDER
          APPLICABLE LAW, ANY AND ALL LIABILITY ARISING FROM, CONNECTED TO, OR
          RELATED TO THE UTILIZATION, MISUSE, OR INTERPRETATION OF ANY CONTENT,
          SERVICES, OR DIGITAL PRODUCTS PROVIDED THROUGH MED EXCUSE (HEREINAFTER
          REFERRED TO AS "WEBSITE").
          <br />
          <br />
          UNDER NO CIRCUMSTANCES SHALL THE COMPANY, ITS OFFICERS, DIRECTORS,
          EMPLOYEES, CONTRACTORS, AFFILIATES, OR LICENSORS BE HELD LIABLE FOR
          ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY,
          OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
          DATA, BUSINESS OPPORTUNITY, REPUTATIONAL DAMAGE, OR LEGAL
          REPERCUSSIONS, REGARDLESS OF THE LEGAL THEORY UNDER WHICH SUCH
          LIABILITY IS CLAIMED.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          2. NO GUARANTEE OF OUTCOME OR UTILITY
        </Text>
        <Text fz={16}>
          THE COMPANY MAKES NO REPRESENTATIONS, WARRANTIES, OR GUARANTEES,
          EXPRESS OR IMPLIED, REGARDING THE FITNESS, SUITABILITY, ACCURACY, OR
          ACCEPTANCE OF ITS SERVICES OR DOCUMENT TEMPLATES BY ANY THIRD PARTY,
          INCLUDING BUT NOT LIMITED TO EMPLOYERS, INSURANCE PROVIDERS,
          REGULATORY AGENCIES, MEDICO-LEGAL AUTHORITIES, OR JUDICIAL BODIES.
          USERS BEAR THE FULL RESPONSIBILITY OF VERIFYING THE APPLICABILITY OF
          ANY TEMPLATE DOCUMENT TO THEIR SPECIFIC CIRCUMSTANCES.
          <br />
          <br />
          ANY DECISION TO RELY UPON THE CONTENT OR SERVICES PROVIDED BY THE
          COMPANY IS MADE AT THE USER’S SOLE VOLITION AND RISK.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          3. FORCE MAJEURE
        </Text>
        <Text>
          THE COMPANY SHALL NOT BE HELD LIABLE FOR ANY FAILURE TO PERFORM OR
          DELAY IN PERFORMANCE OF OBLIGATIONS ARISING FROM CIRCUMSTANCES BEYOND
          ITS REASONABLE CONTROL, INCLUDING BUT NOT LIMITED TO NATURAL
          DISASTERS, ACTS OF WAR, GOVERNMENTAL RESTRICTIONS, CYBERSECURITY
          BREACHES, TELECOMMUNICATION FAILURES, OR ECONOMIC SANCTIONS.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          4. THIRD-PARTY INTERACTIONS
        </Text>
        <Text>
          THE COMPANY DOES NOT ENDORSE, MONITOR, OR ASSUME RESPONSIBILITY FOR
          ANY THIRD-PARTY SERVICES, LINKS, OR RESOURCES THAT USERS MAY ACCESS
          THROUGH THE WEBSITE. USERS INTERACT WITH EXTERNAL ENTITIES SOLELY AT
          THEIR OWN RISK AND SUBJECT TO THE TERMS OF SUCH THIRD PARTIES.
        </Text>
      </Stack>

      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          5. LIMITATION OF LIABILITY TO MONETARY AMOUNT
        </Text>
        <Text>
          IN JURISDICTIONS WHERE LIABILITY LIMITATIONS MAY BE ENFORCED, USERS
          EXPRESSLY AGREE THAT THE COMPANY’S TOTAL AGGREGATE LIABILITY, IF ANY,
          SHALL NOT EXCEED THE AMOUNT PAID BY THE USER FOR SERVICES RENDERED
          WITHIN THE IMMEDIATELY PRECEDING THREE (3) MONTHS OF THE CLAIM'S
          OCCURRENCE.
          <br />
          <br />
          IN INSTANCES WHERE LOCAL LAWS RESTRICT LIABILITY EXCLUSIONS, USERS MAY
          HAVE ADDITIONAL RIGHTS; HOWEVER, SUCH RIGHTS SHALL BE LIMITED TO THE
          MAXIMUM EXTENT PERMISSIBLE UNDER APPLICABLE LAW.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          6. MODIFICATIONS AND REVISIONS
        </Text>
        <Text>
          THE COMPANY RESERVES THE UNEQUIVOCAL RIGHT TO AMEND, MODIFY, OR
          TERMINATE THIS LIMITATION OF LIABILITY POLICY AT ANY TIME WITHOUT
          PRIOR NOTICE. CONTINUED USE OF THE SERVICES SHALL CONSTITUTE
          IRREVOCABLE ACCEPTANCE OF ANY REVISED TERMS.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          7. CONTACT INFORMATION
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
