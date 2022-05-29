import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  StackDivider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

export function SettingsPage() {
  const [params, setParams] = useSearchParams();
  const keys = ['profile', 'account'];
  const activeIndex = keys.indexOf(params.get('active') ?? '');
  const setActiveIndex = (index: number) => setParams({ active: keys[index] });

  return (
    <VStack align='stretch' spacing='2'>
      <Heading>Settings</Heading>
      <Tabs
        isLazy
        colorScheme='messenger'
        index={activeIndex === -1 ? 0 : activeIndex}
        onChange={setActiveIndex}
      >
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Account</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ProfileTab />
          </TabPanel>
          <TabPanel>
            <AccountTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}

const PROFILE_SECTIONS: { title: string; element: React.ReactNode }[] = [
  { title: 'Basic Details', element: <BasicDetailsForm /> },
  { title: 'Academic Details', element: <AcademicDetailsForm /> },
  { title: 'Work Experience', element: <WorkExperienceForm /> },
  { title: 'Additional Documents', element: <AdditionalDocumentsForm /> },
];

function ProfileTab() {
  return (
    <Accordion defaultIndex={0}>
      {PROFILE_SECTIONS.map((item, key) => (
        <AccordionItem key={key}>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              {item.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>{item.element}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function BasicDetailsForm() {
  return (
    <VStack align='flex-start' spacing='4' divider={<StackDivider />}>
      {/* Full Name */}
      <FormControl>
        <Stack direction={['column', 'row']} spacing={['2', '20']}>
          <Box w={['full', 'xs']}>
            <FormLabel htmlFor='full-name'>Full Name</FormLabel>
            <FormHelperText>Enter your full name.</FormHelperText>
          </Box>
          <Input id='full-name' width={['full', 'sm']} />
        </Stack>
      </FormControl>
      {/* Email */}
      <FormControl>
        <Stack direction={['column', 'row']} spacing={['2', '20']}>
          <Box w={['full', 'xs']}>
            <FormLabel htmlFor='email'>Email Address</FormLabel>
            <FormHelperText>
              An email through the employer will contact you.
            </FormHelperText>
          </Box>
          <Input id='email' width={['full', 'sm']} />
        </Stack>
      </FormControl>
      {/* Phone Number */}
      <FormControl>
        <Stack direction={['column', 'row']} spacing={['2', '20']}>
          <Box w={['full', 'xs']}>
            <FormLabel htmlFor='phone'>Phone Number</FormLabel>
            <FormHelperText>
              An phone number through the employer will contact you.
            </FormHelperText>
          </Box>
          <Input id='phone' width={['full', 'sm']} />
        </Stack>
      </FormControl>
      {/* Gender */}
      <FormControl>
        <Stack direction={['column', 'row']} spacing={['2', '20']}>
          <Box w={['full', 'xs']}>
            <FormLabel htmlFor='gender'>Gender</FormLabel>
            <FormHelperText>Lorem ipsum dolor sit amet.</FormHelperText>
          </Box>
          <Select
            placeholder='Select Gender'
            id='gender'
            width={['full', 'sm']}
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='non_binary'>Non Binary</option>
          </Select>
        </Stack>
      </FormControl>
      {/* Nationality */}
      <FormControl>
        <Stack direction={['column', 'row']} spacing={['2', '20']}>
          <Box w={['full', 'xs']}>
            <FormLabel htmlFor='nationality'>Nationality</FormLabel>
            <FormHelperText>Lorem ipsum dolor sit amet.</FormHelperText>
          </Box>
          <Input id='nationality' width={['full', 'sm']} />
        </Stack>
      </FormControl>
      {/* Caste */}
      <FormControl>
        <Stack direction={['column', 'row']} spacing={['2', '20']}>
          <Box w={['full', 'xs']}>
            <FormLabel htmlFor='caste'>Caste</FormLabel>
            <FormHelperText>Lorem ipsum dolor sit amet.</FormHelperText>
          </Box>
          <Select placeholder='Select Caste' id='caste' width={['full', 'sm']}>
            <option value='st'>ST</option>
            <option value='sc'>SC</option>
            <option value='obc-a'>OBC-A</option>
            <option value='obc-b'>OBC-B</option>
            <option value='ur'>UR</option>
          </Select>
        </Stack>
      </FormControl>
      <ButtonGroup spacing='6'>
        <Button>Reset</Button>
        <Button colorScheme='blue'>Save</Button>
      </ButtonGroup>
    </VStack>
  );
}

function AcademicDetailsForm() {
  return <Box />;
}
function WorkExperienceForm() {
  return <Box />;
}
function AdditionalDocumentsForm() {
  return <Box />;
}

function AccountTab() {
  return <Text>Account</Text>;
}