import { Zoom } from "react-awesome-reveal";

const FAQsPage = () => {
  return (
    <div className="my-10 space-y-2 w-11/12 max-w-8xl mx-auto">
      <Zoom triggerOnce>
        <h2 className="font-semibold text-4xl mb-10 text-center">
          Got Questions? We Have Answers!
        </h2>
      </Zoom>
      <div className="collapse collapse-plus bg-base-200 rounded-sm">
        <input type="radio" name="faqs" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is Kind Connect?
        </div>
        <div className="collapse-content">
          <p>
            Kind Connect is an online platform that connects volunteers with
            opportunities to make a positive impact in their community. We
            facilitate connections between individuals and organizations seeking
            volunteer support, making it easy to find and participate in
            meaningful service.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 rounded-sm">
        <input type="radio" name="faqs" />
        <div className="collapse-title text-xl font-medium">
          How do I create a volunteer opportunity post?
        </div>
        <div className="collapse-content">
          <p>
            Creating a post is easy! First, you'll need to create an account or
            log in. Once logged in, navigate to the "Add volunteer need post"
            under My Profile Section. You'll then be prompted to fill out a form
            with details about the opportunity. After filling out the form,
            review your information and click "Post Now". Your post will then be
            visible to potential volunteers.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 rounded-sm">
        <input type="radio" name="faqs" />
        <div className="collapse-title text-xl font-medium">
          Do I need to create an account to see all volunteer need post?
        </div>
        <div className="collapse-content">
          <p>
            No, you can see all the volunteer need post without an account.
            However, you will need to create an account to apply for to be a
            volunteer.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 rounded-sm">
        <input type="radio" name="faqs" />
        <div className="collapse-title text-xl font-medium">
          How do I update or delete a volunteer post I created?
        </div>
        <div className="collapse-content">
          <p>
            To manage your posts, log in to your account. You should find a
            section labeled "My Profile". Under the section you'll find that
            you're looking for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
