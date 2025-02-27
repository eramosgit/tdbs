import { Container, Typography, Box, Link } from "@mui/material";
import { Helmet } from "react-helmet-async";

import { COMPANY_NAME } from "../constants"; // Import company name

const TermsOfUse = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use - {COMPANY_NAME}</title>
        <meta
          name="description"
          content={`Review the Terms of Use for ${COMPANY_NAME} to understand the rules and guidelines for using our services and website.`}
        />
      </Helmet>
      <Container sx={{ py: 6 }}>
        <Typography variant="h4">Terms of Use</Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginBottom: "25px" }}
        >
          Last Updated: February 2025
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to {COMPANY_NAME}. By accessing or using our website, you
          agree to comply with and be bound by the following Terms of Use. If
          you do not agree with these terms, please do not use our website.
        </Typography>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Use of Our Website
          </Typography>
          <Typography variant="body1" paragraph>
            You agree to use this website only for lawful purposes and in
            accordance with these Terms. You may not:
          </Typography>
          <ul>
            <li>
              Use the website in any way that violates applicable laws or
              regulations.
            </li>
            <li>
              Engage in unauthorized access, data mining, or any harmful
              activities.
            </li>
            <li>Distribute malware, spam, or any harmful content.</li>
          </ul>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Intellectual Property Rights
          </Typography>
          <Typography variant="body1" paragraph>
            All content on this website, including text, graphics, logos, and
            software, is the property of {COMPANY_NAME} or its licensors and is
            protected by copyright and trademark laws.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Image Usage and Attribution
          </Typography>
          <Typography variant="body1" paragraph>
            {COMPANY_NAME} uses images sourced from Unsplash (
            <Link
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              unsplash.com
            </Link>
            ), which are licensed under the Unsplash License. These images are
            free to use for commercial and non-commercial purposes without
            requiring permission.
          </Typography>
          <Typography variant="body1" paragraph>
            While most Unsplash images do not require attribution, some
            photographers may request credit as per Unsplash guidelines. Where
            applicable, we strive to provide proper attribution.
          </Typography>
          <Typography variant="body1" paragraph>
            If you believe an image has been used improperly or wish to report
            an issue, please contact us.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Disclaimers and Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            This website is provided &quot;as is&quot; without any warranties.
            We do not guarantee the accuracy, reliability, or availability of
            the content.
          </Typography>
          <Typography variant="body1" paragraph>
            {COMPANY_NAME} shall not be liable for any damages arising from your
            use of this website.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Third-Party Links
          </Typography>
          <Typography variant="body1" paragraph>
            Our website may contain links to third-party websites. We are not
            responsible for the content or privacy practices of those sites.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Changes to These Terms
          </Typography>
          <Typography variant="body1" paragraph>
            We reserve the right to update these Terms of Use at any time.
            Changes will be posted on this page with an updated revision date.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default TermsOfUse;
