import { Icon } from '@/components/Icon';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Column, useTable } from 'react-table';
import { z } from 'zod';

// Modal form validation schema
const FormSchema = z.object({
  name: z.string().nonempty({ message: 'Company name cannot be empty' }),
  personName: z.string().nonempty({ message: 'Name cannot be empty' }),
  personPhone: z
    .string()
    .length(10, { message: 'Phone number must be 10 digits' }),
  email: z.string().email({ message: 'Invalid email address' }),
});

// extract the inferred type
type FormSchemaType = z.infer<typeof FormSchema>;

export function CompaniesPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <>
      {/* Add Company Modal Starts */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        scrollBehavior='inside'
        isCentered
        motionPreset='slideInBottom'
      >
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
        <ModalContent>
          <ModalHeader>Add New Company</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <VStack spacing={6}>
                <FormControl isInvalid={Boolean(errors.name)}>
                  <FormLabel htmlFor='company-name'>Company Name</FormLabel>
                  <Input
                    type='text'
                    id='company-name'
                    placeholder='Eg. Amazon India'
                    {...register('name')}
                  />

                  {errors.name && (
                    <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={Boolean(errors.personName)}>
                  <FormLabel htmlFor='contact-person-name'>
                    Contact Person Name
                  </FormLabel>
                  <Input
                    type='text'
                    id='contact-person-name'
                    placeholder='Eg. Suman Mondal'
                    {...register('personName')}
                  />

                  {errors.personName && (
                    <FormErrorMessage>
                      {errors.personName.message}
                    </FormErrorMessage>
                  )}
                  <FormHelperText>
                    Point of Contact Person from Company
                  </FormHelperText>
                </FormControl>
                <FormControl isInvalid={Boolean(errors.personPhone)}>
                  <FormLabel htmlFor='contact-person-phone'>
                    Contact Person Phone Number
                  </FormLabel>
                  <InputGroup>
                    <InputLeftAddon children='+91' />
                    <Input
                      type='tel'
                      id='contact-person-phone'
                      placeholder='Phone Number'
                      errorBorderColor='red'
                      {...register('personPhone')}
                    />
                  </InputGroup>
                  {errors.personPhone && (
                    <FormErrorMessage>
                      {errors.personPhone.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={Boolean(errors.email)}>
                  <FormLabel htmlFor='contact-person-email'>
                    Contact Person Email
                  </FormLabel>
                  <Input
                    type='email'
                    id='contact-person-email'
                    placeholder='Eg. someone@example.com'
                    {...register('email')}
                  />
                  {errors.email && (
                    <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                  )}
                </FormControl>
              </VStack>
            </Box>
          </ModalBody>

          <ModalFooter>
            <HStack>
              <Button variant='outline' onClick={onClose}>
                Cancel
              </Button>
              <Button
                isLoading={isSubmitting}
                loadingText='Saving...'
                colorScheme='blue'
                onClick={handleSubmit(onSubmit)}
              >
                Save
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Add Company modal ends */}

      <VStack spacing='4' align='stretch'>
        <HStack justify='space-between' align='center'>
          <Heading>Companies</Heading>
          <Button
            colorScheme='blue'
            size='sm'
            leftIcon={<Icon name='add' />}
            onClick={onOpen}
            ref={finalRef}
          >
            Add Company
          </Button>
        </HStack>
        <CompaniesTable />
      </VStack>
    </>
  );
}

type TCompaniesData = {
  companyName: string;
  personName: string;
  personPhone: string;
  personEmail: string;
  jobPosted: number;
  studentPlaced: number;
};
function CompaniesTable() {
  const columns = useMemo<Column<TCompaniesData>[]>(
    () => [
      {
        Header: 'Company Name',
        accessor: 'companyName',
      },
      {
        Header: 'Contact Person Name',
        accessor: 'personName',
      },
      {
        Header: 'Contact Person Phone',
        accessor: 'personPhone',
      },
      {
        Header: 'Contact Person Email',
        accessor: 'personEmail',
      },
      {
        Header: 'No. of Job Posted',
        accessor: 'jobPosted',
      },
      {
        Header: 'No. of Student Placed',
        accessor: 'studentPlaced',
      },
    ],
    []
  );
  const data = useMemo<TCompaniesData[]>(
    () => [
      {
        companyName: 'Laxmi Chit Fund',
        personName: 'Anuradha',
        personPhone: '9123456789',
        personEmail: 'info@laxmichitfund.co',
        jobPosted: 1,
        studentPlaced: 99999999,
      },
      {
        companyName: 'SpaceX Inc.',
        personName: 'Elon Musk',
        personPhone: '9865758612856',
        personEmail: 'info@teslamotor.com',
        jobPosted: 10,
        studentPlaced: 69,
      },
      {
        companyName: 'Vestige India Pvt. Ltd.',
        personName: 'Mr. Bal',
        personPhone: '968745236575',
        personEmail: 'info@vestigetalent.in',
        jobPosted: 69,
        studentPlaced: 45,
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<TCompaniesData>({
      columns,
      data,
    });
  return (
    <TableContainer border='1px' borderColor='gray.100' borderRadius='md'>
      <Table variant='striped' size='md' {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, key) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
