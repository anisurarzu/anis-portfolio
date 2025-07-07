import { useState } from "react";
import {
  Card,
  Typography,
  Space,
  Button,
  Divider,
  Form,
  Input,
  message,
} from "antd";
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
  TwitterOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const primaryColor = "#89BF55"; // Green accent color
const secondaryColor = "#4A6FA5"; // Blue accent color

export default function ContactSection({ active }: { active: boolean }) {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = async (values: any) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      message.success("Message sent successfully!");
      form.resetFields();
    } catch (error) {
      message.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: <MailOutlined className="text-2xl" />,
      text: "anisurrahman.arzu@gmail.com",
      link: "mailto:anisurrahman.arzu@gmail.com",
    },
    {
      icon: <PhoneOutlined className="text-2xl" />,
      text: "+880 1234 567890",
      link: "tel:+8801234567890",
    },
    {
      icon: <LinkedinOutlined className="text-2xl" />,
      text: "linkedin.com/in/anisurrahman",
      link: "https://linkedin.com/in/anisurrahman",
    },
    {
      icon: <GithubOutlined className="text-2xl" />,
      text: "github.com/anisurarzu",
      link: "https://github.com/anisurarzu",
    },
    {
      icon: <TwitterOutlined className="text-2xl" />,
      text: "@anisur_rahman",
      link: "https://twitter.com/anisur_rahman",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 px-4 md:px-8 lg:px-16 ${
        active ? "block" : "hidden"
      } bg-gray-50`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <Text
              className={`text-[${primaryColor}] font-medium tracking-wider text-lg uppercase`}
            >
              Let's Connect
            </Text>
            <Title
              level={2}
              className="mt-3 text-3xl md:text-4xl font-bold text-gray-800"
            >
              Contact Me
            </Title>
            <div className={`w-20 h-1 bg-[${primaryColor}] mx-auto mt-4`}></div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Information Card */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card
              className="shadow-lg h-full border-0"
              bodyStyle={{ padding: "32px" }}
            >
              <Title level={3} className="mb-6 text-gray-800">
                Get In Touch
              </Title>
              <Paragraph className="text-lg mb-8 text-gray-600">
                I'm currently available for freelance work and new
                opportunities. Whether you have a question or just want to say
                hi, I'll do my best to get back to you as soon as possible!
              </Paragraph>

              <Space direction="vertical" size="middle" className="w-full">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className={`text-[${primaryColor}]`}>
                        {item.icon}
                      </div>
                      <Text className="text-lg text-gray-700 hover:text-[${primaryColor}] transition-colors">
                        {item.text}
                      </Text>
                    </a>
                  </motion.div>
                ))}
              </Space>

              <Divider className="my-8" />

              <Text className="text-gray-500">
                I typically respond within 24 hours on weekdays. For urgent
                matters, please call or text me directly.
              </Text>
            </Card>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card
              title={<span className="text-gray-800">Send Me a Message</span>}
              className="shadow-lg h-full border-0"
              headStyle={{ borderBottom: 0, padding: "24px 32px 0" }}
              bodyStyle={{ padding: "0 32px 32px" }}
            >
              <Form
                form={form}
                name="contact"
                onFinish={onFinish}
                layout="vertical"
                requiredMark="optional"
              >
                <Form.Item
                  name="name"
                  label={<span className="text-gray-700">Your Name</span>}
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="John Smith"
                    className="py-2 rounded-lg border-gray-300 hover:border-[${primaryColor}] focus:border-[${primaryColor}]"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label={<span className="text-gray-700">Your Email</span>}
                  rules={[
                    { required: true, message: "Please input your email!" },
                    {
                      type: "email",
                      message: "Please enter a valid email address!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="john@example.com"
                    className="py-2 rounded-lg border-gray-300 hover:border-[${primaryColor}] focus:border-[${primaryColor}]"
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label={<span className="text-gray-700">Your Message</span>}
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <TextArea
                    rows={6}
                    placeholder="Hello Anisur, I'd like to discuss a potential project..."
                    className="resize-none py-2 rounded-lg border-gray-300 hover:border-[${primaryColor}] focus:border-[${primaryColor}]"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    block
                    loading={isSubmitting}
                    className={`bg-[${primaryColor}] hover:bg-[#7aab4a] border-0 h-12 font-medium text-white`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
