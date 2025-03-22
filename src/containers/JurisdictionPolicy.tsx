"use client";
import { Container, Divider, Group, List, Stack, Text } from "@mantine/core";

export const JurisdictionPolicy = () => {
  return (
    <Container size={726} py="lg">
      <Text fz={52} mb={40}>
        Jurisdiction Policy
      </Text>
      <Text fw={500} fz={16} mb={16}>
        <strong>Last Updated: February 4, 2025</strong>
      </Text>

      <Text fz={16} lh={2}>
        <strong>IMPORTANT NOTICE:</strong> BY ACCESSING, UTILIZING, OR ENGAGING
        WITH THE SERVICES OF MED EXCUSE, USERS IRREVOCABLY CONSENT TO THE
        GOVERNING LAW AND JURISDICTION CLAUSES HEREIN. ANY DISAGREEMENT
        NECESSITATES IMMEDIATE DISCONTINUATION OF SERVICE USAGE.
      </Text>

      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          1. APPLICABLE LAW
        </Text>
        <Text fz={16} lh={2}>
          ALL MATTERS ARISING OUT OF OR RELATING TO THE USER'S INTERACTION WITH,
          UTILIZATION OF, OR DEPENDENCE UPON THE SERVICES RENDERED BY MED EXCUSE
          SHALL BE EXCLUSIVELY GOVERNED, INTERPRETED, AND ENFORCED IN ACCORDANCE
          WITH THE STATUTORY, REGULATORY, AND COMMON LAW FRAMEWORKS OF THE HONG
          KONG SPECIAL ADMINISTRATIVE REGION ("HKSAR"), EXCLUDING ITS CONFLICT
          OF LAW PRINCIPLES. USERS HEREBY IRREVOCABLY WAIVE ANY CLAIM, DEFENSE,
          OR OBJECTION PERTAINING TO THE APPLICATION OF ANY OTHER JURISDICTION'S
          LAWS.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          2. EXCLUSIVE JURISDICTION & VENUE
        </Text>
        <Text fz={16}>
          ANY CLAIM, DISPUTE, CONTROVERSY, OR CAUSE OF ACTION ARISING FROM,
          RELATED TO, OR CONNECTED WITH THE SERVICES SHALL BE RESOLVED SOLELY
          AND EXCLUSIVELY IN THE COURTS OF HONG KONG. USERS HEREBY WAIVE ANY
          OBJECTION TO PERSONAL JURISDICTION, IMPROPER VENUE, OR FORUM NON
          CONVENIENS, AND EXPRESSLY CONSENT TO THE ADJUDICATION OF DISPUTES IN
          THE DESIGNATED JUDICIAL FORUM.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          3. WAIVER OF CLASS ACTION & JURY TRIAL
        </Text>
        <Text>
          TO THE MAXIMUM EXTENT PERMISSIBLE UNDER LAW, USERS AGREE THAT ANY AND
          ALL DISPUTES SHALL BE RESOLVED INDIVIDUALLY, ON A CASE-BY-CASE BASIS,
          AND EXPRESSLY WAIVE ANY RIGHT TO PARTICIPATE IN OR INITIATE A CLASS
          ACTION, COLLECTIVE PROCEEDING, OR REPRESENTATIVE CLAIM. FURTHERMORE,
          USERS IRREVOCABLY WAIVE ANY RIGHT TO A TRIAL BY JURY, STIPULATING THAT
          ALL DISPUTES SHALL BE RESOLVED SOLELY THROUGH BENCH TRIAL
          ADJUDICATION.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          4. NO EXTRATERRITORIAL APPLICATION
        </Text>
        <Text>
          UNDER NO CIRCUMSTANCES SHALL ANY USER, ENTITY, OR THIRD PARTY ATTEMPT
          TO INVOKE OR APPLY THE STATUTES, LAWS, OR REGULATORY FRAMEWORKS OF ANY
          OTHER JURISDICTION TO GOVERN OR REGULATE THE SERVICES PROVIDED BY MED
          EXCUSE. ANY ATTEMPT TO ENFORCE FOREIGN LAWS, REGULATIONS, OR JUDGMENTS
          SHALL BE CONSIDERED NULL, VOID, AND LEGALLY UNENFORCEABLE.
        </Text>
      </Stack>

      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          5. NON-NEGOTIABILITY & SEVERABILITY
        </Text>
        <Text>
          THE TERMS SET FORTH HEREIN CONSTITUTE A FUNDAMENTAL COMPONENT OF THE
          LEGAL RELATIONSHIP BETWEEN THE USER AND MED EXCUSE. SHOULD ANY
          PROVISION OF THIS POLICY BE DETERMINED TO BE INVALID, UNENFORCEABLE,
          OR CONTRARY TO LAW, SUCH DETERMINATION SHALL NOT AFFECT THE REMAINING
          PROVISIONS, WHICH SHALL REMAIN IN FULL FORCE AND EFFECT.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          6. MODIFICATIONS AND REVISIONS
        </Text>
        <Text>
          THE COMPANY RESERVES THE UNEQUIVOCAL RIGHT TO AMEND, MODIFY, OR
          TERMINATE THIS GOVERNING LAW & JURISDICTION POLICY AT ANY TIME WITHOUT
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
