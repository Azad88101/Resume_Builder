import React, { useState } from "react";
import FormCard from "./components/FormCard";
import { FcAddDatabase } from "react-icons/fc";

import { RiDeleteBack2Line } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import ResumePreview from "./components/ResumePreview";
import PDFGenerator from "./components/PDFGenerator";
import Footer from "./components/Footer";
const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    education: "",
    objective:"",
    experience: "",
    portfolio: "",
    projects: [], // Changed from projectsCertificates
    certificates: [], // New array for certificates
    skills: [],
  });

  // const ChangeHandler = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const skillHandler = (index, value) => {
    const newSkill = [...formData.skills];
    newSkill[index] = value;
    setFormData({ ...formData, skills: newSkill });
  };

  const removeskill = (index) => {
    const newskill = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: newskill });
  };

  const addskill = () => {
    setFormData({ ...formData, skills: [...formData.skills, ""] });
  };

  const certificateHandler = (i, key, value) => {
    const newCertificate = [...formData.certificates];
    newCertificate[i][key] = value;
    setFormData({ ...formData, certificates: newCertificate });
  };

  const removeCertificate = (index) => {
    const newCertificates = formData.certificates.filter((_, i) => i !== index);

    setFormData({ ...formData, certificates: newCertificates });
  };

  const addCertificate = () => {
    setFormData({
      ...formData,
      certificates: [
        ...formData.certificates,
        { name: "", link: "", description: "" },
      ],
    });
  };

  // const handleProject = (index, key, value) => {
  // const newProject = [...formData.projects];
  // newProject[index][key] = value;
  // setFormData[{ ...formData, project: newProject }];
  // };

  const handleProject = (i, key, value) => {
    const newProject = [...formData.projects];
    newProject[i][key] = value;
    setFormData({ ...formData, projects: newProject });
  };

  const removeProject = (index) => {
    const newProject = formData.projects.filter((_, i) => i !== index);

    setFormData({ ...formData, projects: newProject });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { name: "", link: "", description: "" }],
    });
  };

  return (
    <div className="bg-[#1E1E1E]    p-2 select-none text-[#FFFDF0] ">
      <header className="text-center py-4 bg-[#1E1E1E] text-[#FFFDF0] rounded-b-3xl  rounded-t-3xl shadow-lg border-b-4 border-[#FFF2C2]">
        <h1 className="text-4xl font-bold shining-text">BUILD YOUR RESUME</h1>
        <p className="text-lg">Build your dream, Build Your Resume</p>
      </header>

      <div className="flex flex-col md:flex-row justify-center gap-6 p-6">
        <div className="md:w-full p-6  bg-[#242424] rounded-3xl border-8 border-[#FFF2C2] select-none">
          <h2 className="text-3xl text-[#FFFDF0] mb-6 font-extrabold teko">
            Enter Your Details:
          </h2>

          <div className="md:grid  mb-4 flex-col flex text-black  text-bold md:grid-cols-2">
            <FormCard
              title="Full Name"
              name="name"
              placeholder="Azad"
              value={formData.name}
              onChange={ChangeHandler}
            />
            <FormCard
              title="Conatact Info"
              name="contact"
              placeholder="9xxxxxx90"
              value={formData.contact}
              onChange={ChangeHandler}
            />{" "}
            <FormCard
              title="Email"
              name="email"
              placeholder="ayushrawat88101@gmail.com"
              value={formData.email}
              onChange={ChangeHandler}
            />{" "}
            <FormCard
              title="Education"
              name="education"
              placeholder="Education Details"
              value={formData.education}
              onChange={ChangeHandler}
            />
            {/* <FormCard
              title="Work Expirience"
              name="experience"
              placeholder="Work Expirience"
              value={formData.experience}
              onChange={ChangeHandler}
            /> */}
            <label>
              <p className="text-xl mb-1 text-white font-semibold">
                Expirience
              </p>
              <textarea
                name="experience"
                placeholder="Work Experience"
                value={formData.experience}
                onChange={ChangeHandler}
                className=" w-[90%] p-2 border text-white  border-[#FFF2C2] rounded-lg bg-[#1E1E1E] focus:ring focus:ring-[#FFF2C2]"
                rows={4} // Adjust as needed
              />
            </label>
            <FormCard
              title="Portfolio"
              name="portfolio"
              placeholder="Azad.portfolio.com"
              value={formData.portfolio}
              onChange={ChangeHandler}
            />{" "}
            <FormCard
              title="Career Objective"
              name="objective"
              placeholder="write your goal"
              value={formData.objective}
              onChange={ChangeHandler}
            />
          </div>

          {/* skill & certificate & Projects */}

          {/* certificatessssssssssssssssssssssssssssssssssssssssssssssssss */}

          <h3 className="text-2xl font-semibold  text-[#EFF3EA]  mb-2 ">
            {" "}
            Certificates
          </h3>

          {formData.certificates.map((certificate, index) => (
            <div className="flex-col  mt-4 items-center mb-4 " key={index}>
              <input
                type="text"
                value={certificate.name}
                placeholder="Certificate Name"
                onChange={(e) =>
                  certificateHandler(index, "name", e.target.value)
                }
                className="w-4/5 p-2 border mt-1 mb-1 border-[#FFF2C2] rounded-lg bg-[#1E1E1E] focus:ring focus:ring-[#FFF2C2] mr-2"
              />

              <input
                type="text"
                value={certificate.link}
                placeholder="Certicate Link "
                onChange={(e) =>
                  certificateHandler(index, "link", e.target.value)
                }
                className="w-4/5  p-2 border  mt-1 mb-1 border-[#FFF2C2] rounded-lg bg-[#1E1E1E] focus:ring focus:ring-[#FFF2C2] mr-2"
              />

              <input
                type="text"
                value={certificate.description}
                placeholder="certificate description"
                onChange={(e) =>
                  certificateHandler(index, "description", e.target.value)
                }
                className="w-4/5  p-4 border mt-1 mb-1 border-[#FFF2C2] rounded-lg bg-[#1E1E1E] focus:ring focus:ring-[#FFF2C2] mr-2"
              />

              <button
                className="text-red-900"
                onClick={() => removeCertificate(index)}
              >
                <MdDeleteForever size={34} />
              </button>
            </div>
          ))}

          <button className="mb-7" onClick={addCertificate}>
            <FcAddDatabase size={40} />
          </button>

          {/* skillllssssssssssssssssssssssssssssssssssssssssssssSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSssss */}
          <div className="mb-2 ">
            <label className="block text-2xl font-semibold text-[#EFF3EA] mb-2">
              Skills:{" "}
            </label>

            {formData.skills.map((skill, index) => (
              <div className=" flex items-center  mt-2 mb-4" key={index}>
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => skillHandler(index, e.target.value)}
                  placeholder={`skill ${index + 1}`}
                  className="w-4/5  p-2  mt-1 mb-1 border border-[#FFF2C2] rounded-lg bg-[#1E1E1E] focus:ring focus:ring-[#FFF2C2]"
                />
                <button
                  className=" text-red-900 ml-3 py-1"
                  onClick={() => removeskill(index)}
                >
                  <MdDeleteForever size={34} />
                </button>
              </div>
            ))}
            <button className="mb-7 mt-1" onClick={addskill}>
              <FcAddDatabase size={40} />
            </button>
          </div>

          {/* Projectsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}

          <h3 className="text-2xl text-[#EFF3EA] font-semibold">Projects:</h3>
          {formData.projects.map((project, index) => (
            <div key={index} className=" flex-col flex  gap-3  mt-4  mb-4 ">
              {/* <input
                type="text"
                className="w-4/5  p-2 mt-1 mb-1 border border-[#FFF2C2] rounded-lg bg-[#1E1E1E] focus:ring focus:ring-[#FFF2C2] mr-2"
                onChange={(e) => handleProject(index, "name", e.target.value)}
                placeholder="Enter Project"
                value={data.name}
              /> */}
              {/* 
              <input
                type="text"
                placeholder="Project link"
                value={data.link}
                onChange={(e) => handleProject(index, "link", e.target.value)}
                className="w-4/5  p-2  mt-1 mb-1 border border-[#FFF2C2] rounded-lg bg-[#1E1E1E] focus:ring focus:ring-[#FFF2C2]"
              /> */}

              {/* <input
                type="text"
                placeholder="Project description"
                value={data.description}
                onChange={(e) =>
                  handleProject(index, "description", e.target.value)
                }
                className="w-4/5  p-2  mt-1 mb-1 border border-[#FFF2C2] rounded-lg bg-[#1E1E1E] focus:ring focus:ring-[#FFF2C2]"
              /> */}

              {/* <button
                onClick={() => removeProject(index)}
                className="text-red-900 ml-3 py-1"
              >
                <MdDeleteForever size={34} />
              </button> */}

              <input
                type="text"
                value={project.name}
                placeholder="Certificate Name"
                onChange={(e) => handleProject(index, "name", e.target.value)}
                className="w-4/5 p-2 border mt-1 mb-1 border-[#FFF2C2] rounded-lg bg-[#1E1E1E] focus:ring focus:ring-[#FFF2C2] mr-2"
              />

              <input
                type="text"
                value={project.link}
                placeholder="Certicate Link "
                onChange={(e) => handleProject(index, "link", e.target.value)}
                className="w-4/5  p-2 border  mt-1 mb-1 border-[#FFF2C2] rounded-lg bg-[#1E1E1E] focus:ring focus:ring-[#FFF2C2] mr-2"
              />

              <input
                type="text"
                value={project.description}
                placeholder="certificate description"
                onChange={(e) =>
                  handleProject(index, "description", e.target.value)
                }
                className="w-4/5  p-4 border mt-1 mb-1 border-[#FFF2C2] rounded-lg bg-[#1E1E1E] focus:ring focus:ring-[#FFF2C2] mr-2"
              />

              <button
                className="text-red-900"
                onClick={() => removeProject(index)}
              >
                <MdDeleteForever size={34} />
              </button>
            </div>
          ))}
          <button className="mb-7 mt-4" onClick={addProject}>
            <FcAddDatabase size={40} />
          </button>
        </div>

        {/* resume preview */}
        <div className="md:w-full   ">
          <div className="h-full p-6 bg-[#242424] rounded-xl">
            <h2 className="text-3xl font-extrabold text-[#F2EEE5] mb-6">
              Live Resume Preview:
            </h2>
            <ResumePreview formData={formData} />
          </div>
        </div>
      </div>

      <div className="p-6 pb-10 select-none">
        <PDFGenerator formData={formData} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
