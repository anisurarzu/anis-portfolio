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

const primaryColor = "#111111"; // Black accent
const secondaryColor = "#6b7280"; // Neutral Gray

export default function ContactSection({ active }: { active: boolean }) {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = async (values: any) => {
    setIsSubmitting(true);
    try {
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
      icon: <MailOutlined className="text-xl" />,
      text: "anisurrahman.arzu@gmail.com",
      link: "mailto:anisurrahman.arzu@gmail.com",
    },
    {
      icon: <PhoneOutlined className="text-xl" />,
      text: "+880 1234 567890",
      link: "tel:+8801234567890",
    },
    {
      icon: <LinkedinOutlined className="text-xl" />,
      text: "linkedin.com/in/anisurrahman",
      link: "https://linkedin.com/in/anisurrahman",
    },
    {
      icon: <GithubOutlined className="text-xl" />,
      text: "github.com/anisurarzu",
      link: "https://github.com/anisurarzu",
    },
    {
      icon: <TwitterOutlined className="text-xl" />,
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
              style={{ color: primaryColor }}
              className="font-medium tracking-wider text-lg uppercase"
            >
              Let's Connect
            </Text>
            <Title
              level={2}
              className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
            >
              Contact Me
            </Title>
            <div
              className="w-20 h-1 mx-auto mt-4 rounded-full"
              style={{ backgroundColor: primaryColor }}
            />
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card
              className="h-full border border-gray-200 bg-white"
              bodyStyle={{ padding: "32px" }}
            >
              <Title level={3} className="mb-6 text-gray-900">
                Get In Touch
              </Title>
              <Paragraph className="text-lg mb-8 text-gray-600">
                I’m currently available for freelance work and open to new
                opportunities. Whether you have a question or just want to say
                hello, feel free to reach out!
              </Paragraph>

              <Space direction="vertical" size="middle" className="w-full">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 250 }}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      <div style={{ color: primaryColor }}>{item.icon}</div>
                      <Text className="text-base text-gray-700 hover:text-black transition-colors">
                        {item.text}
                      </Text>
                    </a>
                  </motion.div>
                ))}
              </Space>

              <Divider className="my-8" />

              <Text className="text-gray-500 text-sm">
                I usually reply within 24 hours on weekdays. For urgent matters,
                calling is best.
              </Text>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card
              title={
                <span className="text-gray-900 font-semibold">
                  Send Me a Message
                </span>
              }
              className="h-full border border-gray-200 bg-white"
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
                    className="py-2 rounded-md border-gray-300 focus:border-black hover:border-black"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label={<span className="text-gray-700">Your Email</span>}
                  rules={[
                    { required: true, message: "Please input your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="john@example.com"
                    className="py-2 rounded-md border-gray-300 focus:border-black hover:border-black"
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
                    placeholder="Hello Anisur, I’d like to discuss a project..."
                    className="resize-none py-2 rounded-md border-gray-300 focus:border-black hover:border-black"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    block
                    loading={isSubmitting}
                    style={{
                      backgroundColor: primaryColor,
                      border: "none",
                      height: "48px",
                      fontWeight: 500,
                    }}
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
