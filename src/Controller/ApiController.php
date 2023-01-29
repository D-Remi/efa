<?php

declare(strict_types=1);
namespace App\Controller;

use App\Entity\Contact;
use App\Repository\LinkRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route(path: '/api', name: 'app_api')]
class ApiController extends AbstractController
{
	private $linkRepository;
	private $serializer;

	public function __construct(
		LinkRepository $linkRepository,
		SerializerInterface $serializer
	) {
		$this->linkRepository = $linkRepository;
		$this->serializer = $serializer;
	}

	/**
	 * return all link of api efa
	 */
	#[Route(path: '/link', name: 'app_api_link')]
	public function link()
	{
		$links = $this->linkRepository->findAll();
		$links = $this->serializer->serialize(
			$links,
			'json',
		);

		return new Response($links, 200, ['Content-Type' => 'application/json']);
	}

	/**
	 * register contact
	 */
	#[Route(path: '/contact', name: 'app_api_contact')]
	public function contact(Request $request, EntityManagerInterface $entityManager)
	{
		$data =  json_decode($request->getContent());
       
		$contact = new Contact();
        $contact->setName($data->name);
        $contact->setFirstname($data->firstname);
        $contact->setEmail($data->email);
        $contact->setPhone($data->phone);
        $contact->setMessage($data->message);
        $entityManager->persist($contact);
		$entityManager->flush();

		return new Response('ok', 200, ['Content-Type' => 'application/json']);
	}
}
