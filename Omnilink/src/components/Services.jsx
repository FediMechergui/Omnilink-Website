import './Services.css';

const Services = () => {
  return (
    <section className="services-section">
      <h2>Advantages Of Our Services</h2>
      <div className="services">
        <div className="service">
          <h3>Improved Operational Efficiency</h3>
          <p>Can help businesses reduce their time to market for new products or services, leading to amplified ROI and decreased operating costs.</p>
        </div>
        <div className="service">
          <h3>Enhanced Customer Service and Experience</h3>
          <p>Allow for the automation of mundane tasks, freeing up human resources to focus on more complex activities, ultimately leading to improved customer service and experience.</p>
        </div>
        <div className="service">
          <h3>Competitive Advantage</h3>
          <p>One of the main reasons for using our solutions in business is to gain a competitive advantage. Our technologies can drive or replace lower-level, repetitive tasks, leading to performance improvements when humans and machines work together.</p>
        </div>
        <div className="service">
          <h3>Cost Reduction</h3>
          <p>AI as a service allows businesses to cut down the cost of developing AI solutions significantly. It also offers transparent pricing, ensuring that companies only pay for the AI technologies they use.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
