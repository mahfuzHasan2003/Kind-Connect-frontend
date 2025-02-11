export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-primary text-primary-content">
        <h1 className="text-4xl font-bold mb-4">About Kind Connect</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Kind Connect is a platform that bridges the gap between volunteers and
          those in need. Our mission is to make volunteering accessible,
          impactful, and rewarding.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p>
              Our mission is to create a seamless platform where individuals and
              organizations can connect, collaborate, and make a difference
              through volunteering.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p>
              We envision a world where kindness knows no boundaries, and anyone
              can contribute to meaningful causes, regardless of their
              background or location.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className=" py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md shadow-base-200 border border-base-200"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-6 bg-primary text-primary-content">
        <h2 className="text-3xl font-semibold mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Become a part of Kind Connect and help us build a more connected and
          compassionate world.
        </p>
        <a
          href="/auth/register"
          className="bg-white text-primary px-6 py-3 rounded-lg font-semibold"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}

// Dummy Team Data
const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image:
      "https://i.insider.com/5d2f876fb44ce746713e62ee?width=600&format=jpeg&auto=webp",
  },
  {
    name: "Jane Smith",
    role: "Head of Operations",
    image: "https://spor12.dk/wp-content/uploads/2017/05/speaker-1.jpg",
  },
  {
    name: "Alex Johnson",
    role: "Community Manager",
    image:
      "https://doximity-res.cloudinary.com/images/f_auto,q_auto,t_profile_photo_320x320/dyusi8nh5gd13d3jaic6/craig-miller-md-bethesda-md.jpg?noindex=true",
  },
];
