import React from 'react';
import SectionTitle from '../SectionTitle';
import { About as aboutInfo } from '../../data/about';
import { CloudArchIcon, SREIcon, DevSecOpsIcon, SoftwareDevIcon } from '../../utils/ServiceIcons'
const About: React.FC = () => {


  const services = [
    {
      icon: SoftwareDevIcon,
      title: 'Software Development',
      description: 'I love crafting clean, efficient code that solves real problems — from architecting backends to shipping polished UIs.',
      color: 'text-blue-500',
    },
    {
      icon: CloudArchIcon,
      title: 'Cloud Architecture',
      description: 'I enjoy designing cloud systems that are resilient and cost-smart — whether it\'s AWS, GCP, or Azure, I love making infrastructure elegant.',
      color: 'text-cyan-500',
    },
    {
      icon: DevSecOpsIcon,
      title: 'DevSecOps',
      description: 'I\'m passionate about baking security into every pipeline stage — because I believe safe systems and fast delivery should never be a tradeoff.',
      color: 'text-red-500',
    },
    {
      icon: SREIcon,
      title: 'SRE',
      description: 'I enjoy obsessing over reliability and reducing toil — building systems that are observable, self-healing, and a joy to operate.',
      color: 'text-green-500',
    },
  ];

  return (
    <div className="md:p-7 text-white">
      <div className="pt-8 ">
        <SectionTitle title="About" />

        <div className="mb-12">
          <p className="text-[#9ca3af] leading-relaxed text-base font-normal max-w-4xl mx-auto whitespace-pre-wrap">
            {aboutInfo}
          </p>
        </div>

        <h2 className="text-white font-bold text-2xl mb-8">
          What I Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-[#23272f] border border-[#2a2e38] rounded-2xl p-6  transition-all duration-300 group"
              >
                <div className=' flex items-center justify-center  mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <div
                    className={`w-10 h-10`}
                  >
                    <Icon />
                  </div>
                </div>

                <h3 className="text-white flex justify-center font-semibold text-lg mb-2">
                  {service.title}
                </h3>

                <p className="text-[#9ca3af] text-md">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;