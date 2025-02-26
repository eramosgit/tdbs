import { Container, Typography, Box, Link } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { COMPANY_NAME } from "../constants"; // Import company name

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - {COMPANY_NAME}</title>
        <meta
          name="description"
          content={`Read the privacy policy of ${COMPANY_NAME} to understand how we collect, use, and protect your personal information.`}
        />
      </Helmet>
      <Container sx={{ py: 6 }}>
        <Typography variant="h4">Privacy Policy</Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginBottom: "25px" }}
        >
          Last Updated: February 2025
        </Typography>
        <Typography variant="body1" paragraph>
          At {COMPANY_NAME}, we value your privacy and are committed to
          protecting your personal data. This Privacy Policy outlines how we
          collect, use, and safeguard your information in compliance with
          applicable data protection laws, including the{" "}
          <Link
            href="https://gdpr.eu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            General Data Protection Regulation (GDPR)
          </Link>
          and the{" "}
          <Link
            href="https://oag.ca.gov/privacy/ccpa"
            target="_blank"
            rel="noopener noreferrer"
          >
            California Consumer Privacy Act (CCPA)
          </Link>
          .
        </Typography>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We collect personal information that you provide when you interact
            with our website, including:
          </Typography>
          <ul>
            <li>Name, email address, and contact details</li>
            <li>Company information (if applicable)</li>
            <li>Service inquiries and support requests</li>
            <li>Website usage data via cookies and analytics</li>
            <li>Billing and payment information (if applicable)</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We use the information collected for the following purposes:
          </Typography>
          <ul>
            <li>Providing and improving our services</li>
            <li>Responding to inquiries and support requests</li>
            <li>
              Marketing and promotional communications (with your consent)
            </li>
            <li>Enhancing website performance and security</li>
            <li>Complying with legal and regulatory requirements</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Legal Basis for Processing Personal Data (GDPR Compliance)
          </Typography>
          <Typography variant="body1" paragraph>
            We process your personal data based on one or more of the following
            legal grounds:
          </Typography>
          <ul>
            <li>Your consent</li>
            <li>Performance of a contract</li>
            <li>Legal obligation</li>
            <li>Legitimate business interests</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement industry-standard security measures to protect your
            personal data from unauthorized access, disclosure, or misuse. These
            measures include encryption, access controls, and secure data
            storage practices.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Third-Party Sharing
          </Typography>
          <Typography variant="body1" paragraph>
            We do not sell, rent, or trade your personal information. However,
            we may share data with trusted partners who assist in delivering our
            services, subject to strict confidentiality agreements. These
            partners may include:
          </Typography>
          <ul>
            <li>Payment processors</li>
            <li>Cloud storage providers</li>
            <li>Analytics and advertising platforms</li>
            <li>Legal and regulatory authorities (if required by law)</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Your Rights and Choices
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to access, update, or delete your personal
            information. Under applicable laws such as GDPR and CCPA, you may:
          </Typography>
          <ul>
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent where applicable</li>
          </ul>
          <Typography variant="body1" paragraph>
            To make a request, please contact us at [contact email].
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Cookies and Tracking Technologies
          </Typography>
          <Typography variant="body1" paragraph>
            We use cookies and similar tracking technologies to enhance your
            experience on our website. You can manage your cookie preferences in
            your browser settings.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Changes to This Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date. If there
            are significant changes, we will notify users via email or a website
            announcement.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
