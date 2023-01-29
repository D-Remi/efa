<?php

declare(strict_types=1);
namespace App\Entity;

use App\Repository\EventRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EventRepository::class)]
class Event
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 255)]
	private ?string $name = null;

	#[ORM\Column(type: Types::TEXT, nullable: true)]
	private ?string $description = null;

	#[ORM\Column(type: Types::DATE_MUTABLE)]
	private ?\DateTimeInterface $start_date = null;

	#[ORM\Column(length: 255)]
	private ?string $location = null;

	#[ORM\Column(type: Types::DATETIME_MUTABLE)]
	private ?\DateTimeInterface $created_at = null;

	#[ORM\Column(type: Types::DATETIME_MUTABLE)]
	private ?\DateTimeInterface $updated_at = null;

	public function __construct()
	{
		$this->created_at = new \DateTime();
		$this->updated_at = new \DateTime();
	}

	public function getId(): ?int
	{
		return $this->id;
	}

	public function getName(): ?string
	{
		return $this->name;
	}

	public function setName(string $name): self
	{
		$this->name = $name;

		return $this;
	}

	public function getDescription(): ?string
	{
		return $this->description;
	}

	public function setDescription(?string $description): self
	{
		$this->description = $description;

		return $this;
	}

	public function getStartDate(): ?\DateTimeInterface
	{
		return $this->start_date;
	}

	public function setStartDate(\DateTimeInterface $start_date): self
	{
		$this->start_date = $start_date;

		return $this;
	}

	public function getLocation(): ?string
	{
		return $this->location;
	}

	public function setLocation(string $location): self
	{
		$this->location = $location;

		return $this;
	}

	public function getCreatedAt(): ?\DateTimeInterface
	{
		return $this->created_at;
	}

	public function setCreatedAt(\DateTimeInterface $created_at): self
	{
		$this->created_at = $created_at;

		return $this;
	}

	public function getUpdatedAt(): ?\DateTimeInterface
	{
		return $this->updated_at;
	}

	public function setUpdatedAt(\DateTimeInterface $updated_at): self
	{
		$this->updated_at = $updated_at;

		return $this;
	}
}
