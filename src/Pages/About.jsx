import topImg from "../assets/ourStoryTopImg.png";
import personImg from "../assets/personOne.png";
import personImgTwo from "../assets/personTwo.png";
import personImgThree from "../assets/personThree.png";

const About = () => {
  const stats = [
    { number: "10.5k", label: "Inherited by our film" },
    { number: "3.1k", label: "Formerly of Delaware Films" },
    { number: "45.5k", label: "Delaware studio in our title" },
    { number: "25k", label: "Friend guest under her title" },
  ];

  const team = [
    {
      name: "Tom Cruise",
      role: "Founder & Consumer",
      since: "19",
      img: personImg,
    },
    {
      name: "Emma Watson",
      role: "Smoking Director",
      since: "19",
      img: personImgTwo,
    },
    {
      name: "Will Smith",
      role: "Special member",
      since: "19",
      img: personImgThree,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center lg:text-left mb-6 sm:mb-8">
              Our Story
            </h1>
            <div className="rounded-lg p-0">
              <div className="text-gray-700  max-w-md  leading-relaxed">
                <p className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
                  Mammith Will Suspense is built in deep manner with a inspiring
                  focus on the environment and its own experience. A vibrant
                  family through national materials, strong and service
                  facilities and innovative artistic services are also important
                  to them, inflationary economic accessibility region.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Suspense has now been little practical for this, giving up as
                  a new life to know how it can be appropriate to highlight its
                  ranging from economic.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full flex justify-center ">
            <img
              className=" max-w-[260px] md:max-w-[340px] lg:max-w-[505px] h-auto rounded-lg object-cover"
              src={topImg}
              alt="Our story visual"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="my-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-4 sm:p-6 text-center"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#DB4444] mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white w-full max-w-sm sm:w-auto flex flex-col justify-center items-center rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-full  h-64 md:h-72 sm:h-80 lg:h-96 mb-4 sm:mb-6 bg-gray-200 rounded-md overflow-hidden">
                  <img
                    src={member.img}
                    className="w-[300px] md:w-[350px] lg:w-full  h-full object-cover rounded-md"
                    alt={member.name}
                  />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3">
                  {member.role}
                </p>
                <div className="text-xs sm:text-sm text-gray-500">
                  © {member.since}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-[#DB4444] to-[#c33a3a] rounded-lg text-white p-6 sm:p-8 lg:p-12 text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              Join Our Journey
            </h3>
            <p className="text-sm sm:text-base lg:text-lg opacity-90 max-w-2xl mx-auto">
              We continue to push boundaries and create exceptional experiences
              for our audience. Stay tuned for more exciting projects and
              innovations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
