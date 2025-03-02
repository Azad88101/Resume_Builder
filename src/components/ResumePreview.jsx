import React from "react";

const ResumePreview = ({ formData }) => {
  return (
    <div className="p-6 bg-[#f2eee5]   rounded-3xl border-[#242424]  border-2 ">
      <h2 className=" text-2xl font-semibold mb-4 text-[#242424]  ">
        Resume:{" "}
      </h2>
      {/* top section     */}
      <div className="text-lg text-black  ">
        <p>
          <strong className="text-[#242424] font-semibold  ">Name:</strong>{" "}
          {formData.name || "Your Name"}
        </p>
        <p>
          <strong className="text-[#242424]    font-semibold ">Contact:</strong>{" "}
          {formData.contact || "Your Contact Info"}
        </p>
        <p>
          <strong className="text-[#242424]    font-semibold ">Email:</strong>{" "}
          {formData.email || "your.email@example.com"}
        </p>
        <p>
          <strong className="text-[#242424]   font-semibold ">
            Education:
          </strong>{" "}
          {formData.education || "Your Education"}
        </p>

        <p>
          <strong className="text-[#242424]   font-semibold ">
            Portfolio:
          </strong>{" "}
          <a
            className="text-[#35509b]"
            href={`${formData.portfolio}`}
            target="_blank"
          >
            {formData.name}-Portfolio
          </a>
        </p>

        <p className="text-wrap break-words">
          <strong className="text-[#242424] font-semibold">Experience:</strong>{" "}
          {formData.experience || "Your Experience"}
        </p>
        <p>
          <strong className="text-[#242424] font-semibold  ">Carrier Objective:</strong>{" "}
          {formData.objective || "Your goals/objective"}
        </p>

        {/* Skills Section  ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss*/}
        <p className="mt-4">
          <strong className="text-[#242424]">Skills:</strong>
        </p>
        <ul className="ml-6 list-disc">
          {formData.skills.length > 0 ? (
            formData.skills.map((skill, index) => (
              <li key={index} className="text-gray-700">
                {skill || `Skill ${index + 1}`}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No skills added yet</li>
          )}

          {/* certificate section  sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss  */}

          <p className="mt-4">
            <strong className="text-[#242424]">Certificates:</strong>
          </p>
          {formData.certificates.length > 0 ? (
            <ul className="ml-6 list-disc">
              {formData.certificates.map((certificate, index) => (
                <li key={index} className="text-gray-700">
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {certificate.name || `Certificate ${index + 1}`}
                  </a>

                  <p>{certificate.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 ml-6">No certificates added yet</p>
          )}

          {/* Projects Section sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}
          <p className="mt-4">
            <strong className="text-[#242424]">Projects:</strong>
          </p>
          {formData.projects.length > 0 ? (
            <ul className="ml-6 list-disc">
              {formData.projects.map((project, index) => (
                <li key={index} className="text-gray-700">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {project.name || `Project ${index + 1}`}
                  </a>

                  <p>{project.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 ml-6">No projects added yet</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ResumePreview;
