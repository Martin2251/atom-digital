// components/InfoSection.tsx
const InfoSection: React.FC = () => {
    return (
      <section className="w-full max-w-4xl p-6 mx-auto my-12 bg-white rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-6 text-center">About Atom Digital</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Atom Digital is a cutting-edge digital solutions provider focused on delivering innovative
          and customized services to help businesses thrive in the digital era. Our team of experts
          specializes in web development, mobile app development, digital marketing, and IT consulting.
          We are committed to providing high-quality services that meet the unique needs of our clients,
          ensuring their success and growth in the competitive digital landscape.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Our mission is to empower businesses with the tools and strategies they need to navigate the
          digital world effectively. Whether you are looking to build a new website, optimize your online
          presence, or develop a comprehensive digital strategy, Atom Digital has the expertise and
          experience to help you achieve your goals.
        </p>
      </section>
    )
  }
  
  export default InfoSection
  