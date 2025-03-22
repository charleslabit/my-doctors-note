"use client";
import { Container, Divider, Group, List, Stack, Text } from "@mantine/core";

export const IdemnificationPolicy = () => {
  return (
    <Container size={726} py="lg">
      <Text fz={52} mb={40}>
        Indemnification Policy
      </Text>
      <Text fw={500} fz={16} mb={16}>
        <strong>Last Updated: February 4, 2025</strong>
      </Text>

      <Text fz={16} lh={2}>
        <strong>IMPORTANT NOTICE:</strong> BY ACCESSING, UTILIZING, OR ENGAGING
        WITH THE SERVICES OF MED EXCUSE, USERS EXPRESSLY CONSENT TO THE
        INDEMNIFICATION OBLIGATIONS HEREIN. ANY DISAGREEMENT NECESSITATES
        IMMEDIATE DISCONTINUATION OF SERVICE USAGE.
      </Text>

      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          1. GENERAL INDEMNIFICATION REQUIREMENT
        </Text>
        <Text fz={16} lh={2}>
          USERS HEREBY AGREE TO DEFEND, INDEMNIFY, AND HOLD HARMLESS{" "}
          <strong>COMPANY NAME</strong> (HEREINAFTER REFERRED TO AS "COMPANY,"
          "WE," "US," "OUR"), ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
          AFFILIATES, SUCCESSORS, AND ASSIGNS FROM AND AGAINST ANY AND ALL
          CLAIMS, LIABILITIES, LOSSES, DAMAGES, COSTS, AND EXPENSES, INCLUDING
          WITHOUT LIMITATION, REASONABLE ATTORNEYS' FEES AND COURT COSTS,
          ARISING OUT OF, RELATING TO, OR RESULTING FROM:
        </Text>
        <List spacing={16}>
          <List.Item>
            ANY BREACH OF THIS POLICY OR OTHER APPLICABLE TERMS BY THE USER;
          </List.Item>
          <List.Item>
            USER-GENERATED CONTENT, SUBMISSIONS, OR COMMUNICATIONS THAT INFRINGE
            UPON ANY THIRD-PARTY RIGHTS;
          </List.Item>
          <List.Item>
            ANY VIOLATION OF APPLICABLE LAWS, STATUTES, OR REGULATORY
            FRAMEWORKS;
          </List.Item>
          <List.Item>
            THE UTILIZATION, MISUSE, OR INTERPRETATION OF THE COMPANY’S SERVICES
            OR DOCUMENT TEMPLATES;
          </List.Item>
          <List.Item>
            ANY DISPUTE, CLAIM, OR LEGAL PROCEEDING INITIATED BY A THIRD PARTY
            ARISING FROM THE USER'S INTERACTION WITH OR RELIANCE UPON THE
            SERVICES.
          </List.Item>
        </List>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          2. SCOPE OF INDEMNIFICATION
        </Text>
        <Text fz={16}>
          THE INDEMNIFICATION OBLIGATIONS HEREIN SHALL APPLY REGARDLESS OF THE
          NATURE OF THE CLAIM, WHETHER SOUNDING IN CONTRACT, TORT, STRICT
          LIABILITY, OR ANY OTHER LEGAL THEORY. USERS EXPRESSLY WAIVE ANY RIGHT
          TO CHALLENGE THE ENFORCEMENT OF THIS INDEMNIFICATION OBLIGATION ON
          GROUNDS OF EQUITY, FAIRNESS, OR ALLEGED LACK OF NOTICE.
          <br />
          <br />
          THIS PROVISION SHALL SURVIVE THE TERMINATION, CESSATION, OR EXPIRATION
          OF THE USER’S RELATIONSHIP WITH THE COMPANY AND SHALL REMAIN
          ENFORCEABLE TO THE MAXIMUM EXTENT PERMISSIBLE UNDER APPLICABLE LAW.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          3. THIRD-PARTY CLAIM PROCEDURE
        </Text>
        <Text>
          IN THE EVENT THAT ANY THIRD-PARTY ASSERTS A CLAIM, ALLEGATION, OR
          LEGAL ACTION AGAINST THE COMPANY ARISING FROM USER ACTIONS OR
          OMISSIONS, THE USER SHALL, UPON WRITTEN NOTICE FROM THE COMPANY:
        </Text>
        <List spacing={16} type="ordered">
          <List.Item>
            IMMEDIATELY ASSUME FULL CONTROL OF THE DEFENSE OF SUCH CLAIM;
          </List.Item>
          <List.Item>
            RETAIN LEGAL COUNSEL ACCEPTABLE TO THE COMPANY, WHOSE FEES AND
            EXPENSES SHALL BE BORNE EXCLUSIVELY BY THE USER;
          </List.Item>
          <List.Item>
            REFRAIN FROM ENTERING INTO ANY SETTLEMENT, STIPULATION, OR
            RESOLUTION WITHOUT THE PRIOR WRITTEN CONSENT OF THE COMPANY.
          </List.Item>
        </List>
        <Text>
          IN THE EVENT THAT THE USER FAILS TO TIMELY UNDERTAKE THE DEFENSE, THE
          COMPANY RESERVES THE UNEQUIVOCAL RIGHT TO ASSUME DIRECT CONTROL AND
          SEEK FULL REIMBURSEMENT FROM THE USER FOR ALL ASSOCIATED COSTS AND
          DAMAGES.
        </Text>
      </Stack>
      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          4. NO LIMITATION ON COMPANY REMEDIES
        </Text>
        <Text>
          THE COMPANY'S EXERCISE OF INDEMNIFICATION RIGHTS SHALL NOT PRECLUDE,
          RESTRICT, OR OTHERWISE LIMIT ITS ABILITY TO PURSUE ADDITIONAL
          REMEDIES, INCLUDING BUT NOT LIMITED TO SEEKING INJUNCTIVE RELIEF,
          MONETARY DAMAGES, OR OTHER LEGAL RECOURSE AS PERMISSIBLE UNDER LAW.
        </Text>
      </Stack>

      <Divider m="70px 0" />

      <Stack gap={16}>
        <Text fz={18} fw="bold">
          5. MODIFICATIONS AND REVISIONS
        </Text>
        <Text>
          THE COMPANY RESERVES THE UNEQUIVOCAL RIGHT TO AMEND, MODIFY, OR
          TERMINATE THIS INDEMNIFICATION POLICY AT ANY TIME WITHOUT PRIOR
          NOTICE. CONTINUED USE OF THE SERVICES SHALL CONSTITUTE IRREVOCABLE
          ACCEPTANCE OF ANY REVISED TERMS.
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
