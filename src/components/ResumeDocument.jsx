// import {
//   PDFDownloadLink,
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
// } from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontFamily: "Helvetica",
//   },
//   section: {
//     marginBottom: 15,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 5,
//     textDecoration: "underline",
//   },
//   subtitle: {
//     fontSize: 18,
//     marginBottom: 5,
//   },
//   text: {
//     fontSize: 12,
//     marginBottom: 3,
//   },
//   link: {
//     textDecoration: "underline",
//     color: "blue",
//   },
// });

// const ResumeDocument = ({ formData }) => (
//   // console.log(formData)
//   <Document>
//     <Page style={styles.page}>
//       <Text style={styles.title}>{formData.name}</Text>

//       {/* Contact Information */}
//       <View style={styles.section}>
//         <Text style={styles.subtitle}>{formData.contact}</Text>
//         {/* <Text style={styles.text}>Name: Azad</Text> */}
//         {/* <Text style={styles.text}>Location: Badarpur, New Delhi 110044</Text> */}
//         <Text style={styles.text}>{formData.email}</Text>
//         {/* <Text style={styles.text}>Email: ayushrawat88101@gmail.com</Text> */}
//         <Text style={styles.link}>
//           {/* <Text style={styles.link}>GitHub:</Text> https://github.com/Azad88101 */}
//         </Text>
//         {/* <Text style={styles.link}><Text style={styles.link}>LinkedIn:</Text> https://www.linkedin.com/in/azad88101/ </Text> */}
//         <Text style={styles.link}>
//           {/* <Text style={styles.link}>{formData.name}-</Text> {formData.portfolio}{" "} */}

//           <a href={`${formData.portfolio}`}>{formData.name}</a>
//         </Text>
//       </View>

//       {/* Career Objective */}
//       <View style={styles.section}>
//         <Text style={styles.subtitle}>Career Objective</Text>
//         <Text style={styles.text}>
//           A highly motivated Computer Engineering student at Ambedkar DSEU
//           Shakarpur Campus seeking an internship or entry-level position to
//           leverage my skills in software development, programming, and
//           problem-solving.
//         </Text>
//       </View>

//       {/* Education */}
//       <View style={styles.section}>
//         <Text style={styles.subtitle}>Education</Text>
//         <Text style={styles.text}>
//           Diploma in Computer Engineering - Ambedkar DSEU Shakarpur Campus 1
//           (Expected Graduation: 2025)
//         </Text>
//         <Text style={styles.text}>
//           High School - Govt Boys Senior Secondary School (CBSE, Passed 10th
//           Grade: 2022)
//         </Text>
//       </View>

//       {/* Experience */}
//       <View style={styles.section}>
//         <Text style={styles.subtitle}>Experience</Text>
//         <Text style={styles.text}>Fresher</Text>
//       </View>

//       {/* Positions & Responsibilities */}
//       <View style={styles.section}>
//         <Text style={styles.subtitle}>Positions & Responsibilities</Text>
//         <Text style={styles.text}>
//           • Secretary of the AIT Night Coders (Cyber Security Awareness Club)
//         </Text>
//         <Text style={styles.text}>
//           • Core Member of Google Arcade Facilitator Program
//         </Text>
//       </View>

//       {/* Internship & Training */}
//       <View style={styles.section}>
//         <Text style={styles.subtitle}>Internship & Training</Text>
//         <Text style={styles.text}>
//           Tech Mahindra Foundation (May 2024 - June 2024)
//         </Text>
//         <Text style={styles.text}>
//           Completed training in full-stack web development, gaining hands-on
//           experience in both front-end and back-end technologies while working
//           on diverse projects.
//         </Text>
//       </View>

//       {/* Projects */}
//       <View style={styles.section}>
//         <Text style={styles.subtitle}>Projects</Text>
//         <Text style={styles.link}>
//           <Text style={styles.link}>Sarvagya Nirakar Job Portal:</Text> Built a
//           job portal for the community, handling both frontend and backend.
//           <Text style={styles.link}> (GitHub)</Text>:
//           https://github.com/Azad88101
//         </Text>
//         <Text style={styles.link}>
//           <Text style={styles.link}>
//             Home Automation (July 2024 - August 2024):
//           </Text>{" "}
//           Developed an IoT-based system using Arduino and ESP8266 to control
//           home appliances remotely.
//         </Text>
//       </View>

//       {/* Technical Skills */}
//       <View style={styles.section}>
//         <Text style={styles.subtitle}>Technical Skills</Text>
//         <Text style={styles.text}>
//           • Programming Languages: C++, JavaScript, React
//         </Text>
//         <Text style={styles.text}>• Web Development</Text>
//         <Text style={styles.text}>• Database Management</Text>
//       </View>

//       {/* Soft Skills */}
//       <View style={styles.section}>
//         <Text style={styles.subtitle}>Soft Skills</Text>
//         <Text style={styles.text}>
//           • Strong analytical and problem-solving abilities
//         </Text>
//         <Text style={styles.text}>• Adaptable and quick learner</Text>
//         <Text style={styles.text}>
//           • Organizational and event management skills
//         </Text>
//       </View>

//       {/* Personal Details */}
//       <View style={styles.section}>
//         <Text style={styles.subtitle}>Personal Details</Text>
//         <Text style={styles.text}>• Father's Name: Deepchand</Text>
//         <Text style={styles.text}>• Date of Birth: 15 August 2006</Text>
//         <Text style={styles.text}>• Nationality: Indian</Text>
//         <Text style={styles.text}>• Languages: Hindi & English</Text>
//       </View>

//       {/* Website */}
//       <View style={styles.section}>
//         <Text style={styles.subtitle}>Website</Text>
//         <Text style={styles.link}>
//           <Text style={styles.link}>Sarvagya Nirakar Community:</Text>{" "}
//           https://www.sarvagyanirakarcommunity.co.in/
//         </Text>
//       </View>

//       {/* Declaration */}
//       <View style={styles.section}>
//         <Text style={styles.subtitle}>Declaration</Text>
//         <Text style={styles.text}>
//           I hereby declare that all the statements made above are true to the
//           best of my knowledge and belief.
//         </Text>
//         <Text style={styles.text}>Date: 26/01/2024 | Place: New Delhi</Text>
//         <Text style={styles.text}>(Azad)</Text>
//       </View>
//     </Page>
//   </Document>
// );

// export default ResumeDocument;

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

// Styles for the PDF document
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff", // White background
  },
  section: {
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
    color: "#222",
  },
  text: {
    fontSize: 12,
    marginBottom: 3,
    color: "#555",
  },
  link: {
    fontSize: 12,
    textDecoration: "underline",
    color: "#007BFF",
  },
  list: {
    marginLeft: 12,
  },
  listItem: {
    fontSize: 12,
    marginBottom: 4,
    color: "#444",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: "#000",
  },
  contactInfo: {
    textAlign: "center",
    fontSize: 12,
    marginBottom: 15,
    color: "#444",
  },
  bold: {
    fontWeight: "bold",
    color: "#222",
  },
  declarationSection: {
    textAlign: "center",
    marginTop: 30,
  },
  declarationText: {
    fontSize: 12,
    marginBottom: 5,
    color: "#333",
  },
});

const ResumeDocument = ({ formData }) => (
  <Document>
    <Page style={styles.page}>
      {/* Resume Header */}
      <Text style={styles.name}>{formData.name || "Your Name"}</Text>
      <Text style={styles.contactInfo}>
        {formData.contact || "Your Contact Info"} |{" "}
        {formData.email || "your.email@example.com"}
      </Text>
      {formData.portfolio && (
        <Text style={styles.contactInfo}>
          <Link src={formData.portfolio} style={styles.link}>
            Portfolio
          </Link>
        </Text>
      )}

      {/* Career Objective */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Career Objective</Text>
        <Text style={styles.text}>
          {formData.objective || "Your goals/objective"}
        </Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Education</Text>
        <Text style={styles.text}>
          {formData.education || "Your Education Details"}
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Experience</Text>
        <Text style={styles.text}>
          {formData.experience || "Your Experience"}
        </Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Skills</Text>
        {formData.skills.length > 0 ? (
          <View style={styles.list}>
            {formData.skills.map((skill, index) => (
              <Text key={index} style={styles.listItem}>
                • {skill}
              </Text>
            ))}
          </View>
        ) : (
          <Text style={styles.text}>No skills added yet</Text>
        )}
      </View>

      {/* Certificates */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Certificates</Text>
        {formData.certificates.length > 0 ? (
          <View style={styles.list}>
            {formData.certificates.map((certificate, index) => (
              <View key={index}>
                <Text style={styles.listItem}>
                  •{" "}
                  <Link src={certificate.link} style={styles.link}>
                    {certificate.name}
                  </Link>
                </Text>
                <Text style={styles.text}>
                  {certificate.description || "No description provided"}
                </Text>
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.text}>No certificates added yet</Text>
        )}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Projects</Text>
        {formData.projects.length > 0 ? (
          <View style={styles.list}>
            {formData.projects.map((project, index) => (
              <View key={index}>
                <Text style={styles.listItem}>
                  •{" "}
                  <Link src={project.link} style={styles.link}>
                    {project.name}
                  </Link>
                </Text>
                <Text style={styles.text}>
                  {project.description || "No description provided"}
                </Text>
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.text}>No projects added yet</Text>
        )}
      </View>

      {/* Declaration */}
      <View style={styles.declarationSection}>
        <Text style={styles.subtitle}>DECLARATION</Text>
        <Text style={styles.declarationText}>
          I hereby declare that all the statements made above are true to the
          best of my knowledge and belief.
        </Text>
        <Text style={styles.declarationText}>
          Date: {new Date().toLocaleDateString("en-GB",{
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </Text>

        <Text style={styles.declarationText}>
          ({formData.name || "Your Name"})
        </Text>
      </View>
    </Page>
  </Document>
);

export default ResumeDocument;
